import React, { useState, useEffect } from 'react';
import './InfoCard.css'; 

const InfoCard = ({ countryName, location }) => {
    const formattedLocation = location.lat && location.lng 
        ? `Lat: ${location.lat.toFixed(2)}, Lng: ${location.lng.toFixed(2)}`
        : "Click on map to get coordinates";

    return (
      <div className="info-card-container">
        <div className="country-section">
          <span className="country-label">Selected Country:</span> 
          <span className="country-name">{countryName || "None"}</span>
          
        </div>
        <div className="country-section"> 
          <span className="coordinates">{formattedLocation}</span>
        </div> 
      </div>
    );
};
  
  export default InfoCard;
  
