import React, { useEffect, useState } from 'react';
import CO2Map from './components/CO2Map';
const fs = require("fs");

function App() {
  const [averages, setAverages] = useState({});

  useEffect(() => {
    async function fetchData() {
      // get data from csv
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <CO2Map />
      <div>123</div>
    </div>
  );
}

export default App;
