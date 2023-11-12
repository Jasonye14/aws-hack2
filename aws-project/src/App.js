import React, { useEffect, useState } from 'react';

import './App.css';
import CO2Map from './components/CO2Map/CO2Map';
import MainPage from './pages/main';

function App() {
  const [data, setData] = useState(null);

useEffect(() => {
  const url = 'https://airquality.googleapis.com/v1/currentConditions:lookup?key=AIzaSyACtvFhkIF7nUaCXpLiZmpauqJG5mTPaB4';
  const headers = {
    'Content-Type': 'application/json'
  };
  const body = JSON.stringify({
    "universalAqi": true,
    "location": {
      "latitude": 37.419734,
      "longitude": -122.0827784
    },
    "extraComputations": [
      "HEALTH_RECOMMENDATIONS",
      "DOMINANT_POLLUTANT_CONCENTRATION",
      "POLLUTANT_CONCENTRATION",
      "LOCAL_AQI",
      "POLLUTANT_ADDITIONAL_INFO"
    ],
    "languageCode": "en"
  });

  fetch(url, {
    method: 'POST',
    headers: headers,
    body: body
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    setData(data); // Saving the data to the state
  })
  .catch(error => console.error('Error:', error));
}, []);




  


  return (
    <div className="App">
      <MainPage />
    </div>
  );
}

export default App;