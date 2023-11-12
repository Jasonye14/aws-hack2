import React, {useState, useEffect} from 'react';

import './App.css';
import CO2Map from './components/CO2Map/CO2Map';
import MainPage from './pages/main';

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
      <MainPage />
    </div>
  );
}

export default App;