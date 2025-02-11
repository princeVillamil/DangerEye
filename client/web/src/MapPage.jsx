import {React, Component} from 'react'
import './assets/style/MapPage.css'
import 'leaflet/dist/leaflet.css'

import { MapContainer, TileLayer } from 'react-leaflet'

function MapPage() {
  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  </MapContainer>
  );
};

export default MapPage;