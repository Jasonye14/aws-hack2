import React, { useEffect, useState } from 'react';

import './App.css';
import CO2Map from './components/CO2Map/CO2Map';
import MainPage from './pages/main';

function App() {
  const [data, setData] = useState({});

  useEffect(() => {

    fetch("https://airquality.googleapis.com/v1/currentConditions:lookup?key=AIzaSyACtvFhkIF7nUaCXpLiZmpauqJG5mTPaB4", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      mode: "no-cors"
    }).then(res => res.json()).then(data => { console.log(data); });

  }, []);

  return (
    <div className="App">
      <MainPage />
    </div>
  );
}

export default App;