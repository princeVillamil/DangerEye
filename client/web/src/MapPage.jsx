import React, { useEffect } from 'react';
import './assets/style/MapPage.css'// Ensure this path is correct
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';
import 'leaflet-control-geocoder';
import 'leaflet.locatecontrol';
import 'leaflet.locatecontrol/dist/L.Control.Locate.min.css';
import L from 'leaflet';

// Component to add controls
function MapControls() {
  const map = useMap();

  useEffect(() => {
    // Add Locate Control
    const locateControl = L.control.locate({
      position: 'topright',
      drawCircle: true,
      keepCurrentZoomLevel: true,
      showPopup: false,
      strings: {
        title: "Show my location"
      },
      locateOptions: {
        enableHighAccuracy: true
      }
    }).addTo(map);

    // Add Geocoder Control
    if (typeof L.Control.Geocoder !== 'undefined') {
      const geocoder = L.Control.Geocoder.nominatim();
      L.Control.geocoder({
        defaultMarkGeocode: false,
        geocoder
      }).on('markgeocode', function(e) {
        const bbox = e.geocode.bbox;
        const poly = L.polygon([
          [bbox.getSouthEast().lat, bbox.getSouthEast().lng],
          [bbox.getNorthEast().lat, bbox.getNorthEast().lng],
          [bbox.getNorthWest().lat, bbox.getNorthWest().lng],
          [bbox.getSouthWest().lat, bbox.getSouthWest().lng]
        ]).addTo(map);
        map.fitBounds(poly.getBounds());
      }).addTo(map);
    }
  }, [map]);

  return null;
}

const MapPage = () => {
  return (
    <MapContainer 
      className="map-container" // Using class instead of id
      center={[20, 0]} 
      zoom={2} 
    >
      <TileLayer
        url="https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=M5ISu0vuXHGPPTeGHPw2"
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
      />
      <MapControls />
    </MapContainer>
  );
};

export default MapPage;
