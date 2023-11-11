import React from 'react';

import './App.css';
import CO2Map from './components/CO2Map/CO2Map';
import MainPage from './pages/main';
import WorldMap from './components/CO2Map/CO2Map';

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
      <WorldMap />
    </div>
  );
}

export default App;