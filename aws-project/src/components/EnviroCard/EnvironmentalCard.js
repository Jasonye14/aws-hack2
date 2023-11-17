import React, { useEffect, useState } from 'react';
import 'react-circular-progressbar/dist/styles.css';
import './EnvironmentalCard.css';

const EnvironmentalCard = ({data}) => {
  const [activeTab, setActiveTab] = useState('today');
  const [info, setInfo] = useState({});

  useEffect(() => {
    if (data) {
      const advice = data.healthRecommendations;
      setInfo({
        ...advice
      })
    }
  }, [data]);



  // const data = {
  //   plannedTrees: 200,
  //   plantedTrees: 100,
  //   totalTreesGoal: 250,
  //   carbonOffsetAchieved: 125, // in tons
  //   carbonOffsetGoal: 250 // in tons
  // };

  // const plantingProgress = (data.plantedTrees / data.totalTreesGoal) * 100;
  // const carbonOffsetProgress = (data.carbonOffsetAchieved / data.carbonOffsetGoal) * 100;

  return (
    <div className="environmental-card">
      <div className="button-group">
        <button className={activeTab === 'generalPopulation' ? 'active' : ''} onClick={() => setActiveTab('generalPopulation')}>GENERAL</button>
        <button className={activeTab === 'athletes' ? 'active' : ''} onClick={() => setActiveTab('athletes')}>ATHLETES</button>
        <button className={activeTab === 'elderly' ? 'active' : ''} onClick={() => setActiveTab('elderly')}>ELDERLY</button>
      </div>
      {/* Display the advice based on the active tab */}
      <div className="advice-section">
        {info[activeTab] ? (
          <p>{info[activeTab]}</p>
        ) : (
          <p>No specific advice available. Stay safe!</p>
        )}
      </div>
    </div>
  );
};

export default EnvironmentalCard;
