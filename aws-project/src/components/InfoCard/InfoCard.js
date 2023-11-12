import React, { useState, useEffect } from 'react';
import './InfoCard.css'; 

const InfoCard = ({ countryName }) => {
    return (
      <div className="info-card-container">
        <div className="country-section">
          <span className="country-label">Selected Country:</span> 
          <span className="country-name">{countryName || "None"}</span>
        </div>
      </div>
    );
  };
  
  export default InfoCard;
  
