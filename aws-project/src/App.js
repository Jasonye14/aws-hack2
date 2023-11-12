import React, { useEffect, useState } from 'react';

import './App.css';
import CO2Map from './components/CO2Map/CO2Map';
import MainPage from './pages/main';

function App() {
  const [data, setData] = useState({});

  // "X-Goog-User-Project": "le-laf-hackathon"
  // "Authorization": "Bearer ya29.a0AfB_byCSVcblirmXsPRVDx9o3H9Idp_vgBUzAvZKEmUcNqfnnVmyJRPfAODc6iXDYhv9tveytzlVMgG7XXqqgtropD59L7SKFKbkVctA_W5bgOQqfQyWq_xMvDbkcZQIzFagjKw0Q9Fzf6NjZVqlVGLc5qpoTYg2LtwuaCgYKAe8SARASFQHGX2Mi3QkNvR00uSLJ3Unc89b4gQ0171",
  useEffect(() => {
    fetch("https://airquality.googleapis.com/v1/currentConditions:lookup?key=AIzaSyACtvFhkIF7nUaCXpLiZmpauqJG5mTPaB4", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        universalAqi: true,
        location: {
            latitude: 37.419734,
            longitude: -122.0827784
        },
        extraComputations: [
            "HEALTH_RECOMMENDATIONS",
            "DOMINANT_POLLUTANT_CONCENTRATION",
            "POLLUTANT_CONCENTRATION",
            "LOCAL_AQI",
            "POLLUTANT_ADDITIONAL_INFO"
        ],
        languageCode: "en"
      })
    }).then(res => res.json()).then(data => { console.log(data); });
  }, []);

  return (
    <div className="App">
      <MainPage />
    </div>
  );
}

export default App;