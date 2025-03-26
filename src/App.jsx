import React, {useState} from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './App.css';


function App() {
  return (

      <MapContainer center={[54.8944, 23.8848]} zoom={8}scrollWheelZoom={true}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {fetch("https://konkursas.kitm.lt/backend/380288/api/v1/places")
        .then(response => response.json())
        .then(data => data.data.map((value) => (
          <Marker 
            key={value._id}
            position={[value.latitude, value.longitude]}>
            onclick
            <Popup>
              <div className="popup-div">
                <h2>{value.name}</h2>
                <h4>{value.description}</h4>
                <p>Adresas: {value.address}</p>
                <p>Reitingas: {value.rating}</p>
              </div>
            </Popup>
          </Marker>
        )))
        .catch(error => console.log(error))}
      
    </MapContainer>
  );
}

export default App;
