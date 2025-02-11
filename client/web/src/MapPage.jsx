import React, { useEffect, useRef, useState } from 'react';
import maplibregl from 'maplibre-gl';
import { useNavigate } from 'react-router-dom';
import 'maplibre-gl/dist/maplibre-gl.css';
import './assets/style/MapPage.css';

const MapPage = () => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const [userLocation, setUserLocation] = useState(null);
  const [locationError, setLocationError] = useState(null);
  const [currentStyle, setCurrentStyle] = useState('streets');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
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
      center: [0, 0],
      zoom: 2,
    });

    mapRef.current = map;

    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { longitude, latitude } = position.coords;
          setUserLocation([longitude, latitude]);
          
          map.flyTo({
            center: [longitude, latitude],
            zoom: 16,
            essential: true,
            duration: 2000
          });

          new maplibregl.Marker({
            color: '#FF0000'
          })
            .setLngLat([longitude, latitude])
            .addTo(map);

          new maplibregl.Popup()
            .setLngLat([longitude, latitude])
            .setHTML(`<p>You are here!<br>Lat: ${latitude.toFixed(4)}<br>Lng: ${longitude.toFixed(4)}</p>`)
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
    return () => map.remove();
  }, [currentStyle]);

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;
    
    setIsSearching(true);
    try {
      const response = await fetch(
        `https://api.maptiler.com/geocoding/${encodeURIComponent(searchQuery)}.json?key=M5ISu0vuXHGPPTeGHPw2`
      );
      const data = await response.json();
      setSearchResults(data.features);
    } catch (error) {
      console.error('Search error:', error);
      setLocationError('Search failed. Please try again.');
    }
    setIsSearching(false);
  };

  const handleLocationSelect = (location) => {
    const [lng, lat] = location.center;
    
    const markers = document.getElementsByClassName('search-marker');
    while(markers[0]) {
      markers[0].parentNode.removeChild(markers[0]);
    }

    new maplibregl.Marker({
      color: '#4B0082',
      className: 'search-marker'
    })
      .setLngLat([lng, lat])
      .addTo(mapRef.current);

    mapRef.current.flyTo({
      center: [lng, lat],
      zoom: 14,
      essential: true
    });

    setSearchResults([]);
    setSearchQuery('');
  };

  return (
    <div className="map-container-wrapper">
      <div ref={mapContainerRef} className="map-container" />
      
      <button onClick={() => navigate('/')} className="home-button">
        Home
      </button>

      <div className="search-container">
        <div className="search-bar">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            placeholder="Search location..."
            className="search-input"
          />
          <button
            onClick={handleSearch}
            disabled={isSearching}
            className="search-button"
          >
            {isSearching ? '...' : '🔍'}
          </button>
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
    </div>
  );
};

export default MapPage;