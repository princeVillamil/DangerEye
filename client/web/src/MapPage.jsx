import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import maplibregl from 'maplibre-gl';
import MapNote from './MapNote';
import 'maplibre-gl/dist/maplibre-gl.css';
import './assets/style/MapPage.css';
import dangereyeLogo from './assets/imgs/dangereye-logo-1.png';
import dangereyepin from './assets/imgs/dangereye-red-pin.png';
import { useNavigate } from 'react-router-dom';

const MapPage = () => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const [userLocation, setUserLocation] = useState(null);
  const [locationError, setLocationError] = useState(null);
  const [currentStyle, setCurrentStyle] = useState('streets');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [markers, setMarkers] = useState([]);
  const searchTimeoutRef = useRef(null);
  const navigate = useNavigate();

  const mapStyles = {
    streets: 'https://api.maptiler.com/maps/streets-v2/style.json?key=M5ISu0vuXHGPPTeGHPw2',
    satellite: 'https://api.maptiler.com/maps/satellite/style.json?key=M5ISu0vuXHGPPTeGHPw2',
    hybrid: 'https://api.maptiler.com/maps/hybrid/style.json?key=M5ISu0vuXHGPPTeGHPw2',
    dark: 'https://api.maptiler.com/maps/dark/style.json?key=M5ISu0vuXHGPPTeGHPw2'
  };

  useEffect(() => {
    const map = new maplibregl.Map({
      container: mapContainerRef.current,
      style: mapStyles[currentStyle],
      center: userLocation || [0, 0],
      zoom: userLocation ? 19 : 2,
    });

    mapRef.current = map;

    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { longitude, latitude } = position.coords;
          setUserLocation([longitude, latitude]);
          
          map.flyTo({
            center: [longitude, latitude],
            zoom: 19,
            essential: true,
            duration: 2000
          });

          new maplibregl.Marker({
            color: '#4D1717'
          })
            .setLngLat([longitude, latitude])
            .addTo(map);
        },
        (error) => {
          setLocationError(error.message);
          console.error('Error getting location:', error);
        },
        {
          enableHighAccuracy: true,
          maximumAge: 0
        }
      );
    } else {
      setLocationError('Geolocation is not supported by your browser');
    }

    map.addControl(new maplibregl.NavigationControl(), 'top-right');
    map.on('contextmenu', handleMapRightClick);

    return () => {
      map.off('contextmenu', handleMapRightClick);
      map.remove();
    };
  }, [currentStyle]);

  
const handleMapRightClick = (event) => {
  event.preventDefault();
  const { lng, lat } = event.lngLat;

  const newMarker = { 
    lng, 
    lat, 
    note: '',
    tags: [],
    hazardType: '',
    id: Date.now(),
    timestamp: new Date().toLocaleString() 
  };

  const markerElement = document.createElement('div');
  markerElement.className = 'custom-marker';
  const markerImg = document.createElement('img');
  markerImg.src = dangereyepin;
  markerImg.alt = 'Location marker';
  markerElement.appendChild(markerImg);

  const marker = new maplibregl.Marker({
    element: markerElement,
    anchor: 'bottom'
  })
  .setLngLat([lng, lat])
  .addTo(mapRef.current);

  const createAndShowPopup = () => {
    const popupContainer = document.createElement('div');
    const popup = new maplibregl.Popup({ 
      offset: [0, -20], 
      closeButton: false,
      closeOnClick: false,
      maxWidth: '300px',
      className: 'edit-popup'
    }).setLngLat([lng, lat]);

    const handleSave = (data) => {
      newMarker.note = data.note;
      newMarker.tags = data.tags;
      newMarker.hazardType = data.hazardType;
      
      setMarkers(prevMarkers => 
        prevMarkers.map(m => m.id === newMarker.id ? {...m, ...data} : m)
      );
      popup.remove();
    };

    const handleClose = () => {
      ReactDOM.unmountComponentAtNode(popupContainer);
      popup.remove();

      if (!newMarker.note.trim()) {
        marker.remove();
        setMarkers(prevMarkers => prevMarkers.filter(m => m.id !== newMarker.id));
      }
    };

    ReactDOM.render(
      <MapNote 
        onClose={handleClose}
        onSave={handleSave}
        initialNote={newMarker.note}
        initialTags={newMarker.tags}
        initialHazardType={newMarker.hazardType}
      />,
      popupContainer
    );

    popup.setDOMContent(popupContainer)
      .addTo(mapRef.current);
  };

  createAndShowPopup();
  markerElement.onclick = createAndShowPopup;

  setMarkers(prevMarkers => [...prevMarkers, newMarker]);
};
  

  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }
    
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    searchTimeoutRef.current = setTimeout(async () => {
      setIsSearching(true);
      try {
        const response = await fetch(
          `https://api.maptiler.com/geocoding/${encodeURIComponent(searchQuery)}.json?key=M5ISu0vuXHGPPTeGHPw2`
        );
        if (!response.ok) {
          throw new Error('Search request failed');
        }
        const data = await response.json();
        setSearchResults(data.features || []);
      } catch (error) {
        console.error('Search error:', error);
        setLocationError('Search failed. Please try again.');
      } finally {
        setIsSearching(false);
      }
    }, 300);
  };

  useEffect(() => {
    handleSearch();
    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
    };
  }, [searchQuery]);

  const handleLocationSelect = (location) => {
    const [lng, lat] = location.center;
    
    mapRef.current.flyTo({
      center: [lng, lat],
      zoom: 14,
      essential: true
    });

    const marker = new maplibregl.Marker()
      .setLngLat([lng, lat])
      .addTo(mapRef.current);

    const popup = new maplibregl.Popup({ offset: 25 })
      .setLngLat([lng, lat])
      .setHTML(`<h3>${location.place_name}</h3>`)
      .addTo(mapRef.current);

    setSearchResults([]);
    setSearchQuery('');
  };

  return (
    <div className="map-container-wrapper">
      <div ref={mapContainerRef} className="map-container" />
      <button onClick={() => navigate('/')} className="home-button">
        <img src={dangereyeLogo} alt="dangereyeLogo Logo" className="home-icon" />
      </button>

      <div className="search-container">
        <div className="search-bar">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search location..."
            className="search-input"
          />
          {isSearching && <div className="search-loading">Searching...</div>}
        </div>

        {searchResults.length > 0 && (
          <div className="search-results">
            {searchResults.map((result) => (
              <div
                key={result.id}
                onClick={() => handleLocationSelect(result)}
                className="search-result-item"
              >
                {result.place_name}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="style-control">
        <select
          value={currentStyle}
          onChange={(e) => setCurrentStyle(e.target.value)}
          className="style-select"
        >
          <option value="streets">Streets</option>
          <option value="satellite">Satellite</option>
          <option value="hybrid">Hybrid</option>
          <option value="dark">Dark</option>
        </select>
      </div>

      {locationError && (
        <div className="error-message">
          {locationError}
        </div>
      )}

      <div className="notes-container">
        <h3>Pinned Locations</h3>
        <ul>
          {markers.map((marker) => (
            <li key={marker.id}>
              <h4>{marker.note}</h4>
              <p>Location: {marker.lng.toFixed(4)}, {marker.lat.toFixed(4)}</p>
              <p>Added: {marker.timestamp}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MapPage;