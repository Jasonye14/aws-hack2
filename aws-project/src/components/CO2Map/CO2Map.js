import React, { useState } from 'react';
import { MapContainer, TileLayer, GeoJSON, useMap, Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import countries from '../custom.geo.json';
import { point, centerOfMass } from '@turf/turf';

function CO2Map() {
    const [activeCountry, setActiveCountry] = useState(null);
    const position = [51.505, -0.09]; // Center of the map
    const maxBounds = [[-90, -180], [90, 180]]; // Maximum bounds for the map

    // Custom centroids for specific countries
    const customCentroids = {
        'Russia': [90.52401, 63.318756], // Coordinates for Russia
        'United States of America': [-98.09024, 36.712891], // Coordinates for the USA
        'New Zealand': [172.900557, -40.885971] // Coordinates for New Zealand
    };

    const getCustomCentroid = (country) => {
        if (customCentroids[country.properties.name]) {
            return customCentroids[country.properties.name];
        } else {
            const centroid = centerOfMass(country);
            return centroid.geometry.coordinates;
        }
    };

    const onEachCountry = (country, layer) => {
        layer.on({
            mouseover: () => {
                const coordinates = getCustomCentroid(country);
                setActiveCountry({
                    name: country.properties.name,
                    latlng: [coordinates[1], coordinates[0]]
                });
            },
            mouseout: () => {
                setActiveCountry(null);
            }
        });
    };


    // Define the style for the GeoJSON countries
    const countryStyle = {
        fillColor: "#444c63", // No fill to show only the outlines
        weight: 2, // Border line weight
        opacity: 1,
        color: '#272C38', // Border line color
        fillOpacity: 0.7
    };

    return (
        <MapContainer center={position} zoom={2} style={{ height: "100vh" }} maxBounds={maxBounds}>
            <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png" />
            <GeoJSON data={countries} style={countryStyle} onEachFeature={onEachCountry} />
            {activeCountry && (
                <Popup position={activeCountry.latlng}>
                    {activeCountry.name}
                </Popup>
            )}
        </MapContainer>
    );
}

export default CO2Map;
