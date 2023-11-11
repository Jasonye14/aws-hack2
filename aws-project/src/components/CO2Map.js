import React, { useState } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import countries from './countries.json'; // Assumed path to GeoJSON file

function CO2Map() {
    const [activeCountry, setActiveCountry] = useState();
    const position = [51.505, -0.09]; // Default map position

    // Function to handle mouseover on country
    const onEachCountry = (country, layer) => {
        layer.on({
            mouseover: () => {
                setActiveCountry(country.properties.name);
                layer.bindPopup(country.properties.name).openPopup();
            },
            mouseout: () => {
                layer.closePopup();
            }
        });
    };

    return (
        <MapContainer center={position} zoom={2} style={{ height: "100vh" }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <GeoJSON
                data={countries}
                onEachFeature={onEachCountry}
            />
        </MapContainer>
    );
}

export default CO2Map;
