import React, { useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './EnvironmentalCard.css';

const EnvironmentalCard = () => {
  const [activeTab, setActiveTab] = useState('today');
  const data = {
    plannedTrees: 200,
    plantedTrees: 50,
    totalTreesGoal: 250,
    carbonOffsetAchieved: 125, // in tons
    carbonOffsetGoal: 250 // in tons
  };

  const plantingProgress = (data.plantedTrees / data.totalTreesGoal) * 100;
  const carbonOffsetProgress = (data.carbonOffsetAchieved / data.carbonOffsetGoal) * 100;

  return (
    <div className="environmental-card">
      <div className="button-group">
        <button className={activeTab === 'today' ? 'active' : ''} onClick={() => setActiveTab('today')}>TODAY</button>
        <button className={activeTab === 'lastWeek' ? 'active' : ''} onClick={() => setActiveTab('lastWeek')}>LAST WEEK</button>
        <button className={activeTab === 'mtd' ? 'active' : ''} onClick={() => setActiveTab('mtd')}>MTD</button>
      </div>
      <div className="stat-group">
        <div className="stat">
          <span className="stat-label">Planned Trees</span>
          <span className="stat-value">{data.plannedTrees}</span>
        </div>
        <div className="stat">
          <span className="stat-label">Adhoc Trees</span>
          <span className="stat-value">{data.plantedTrees}</span>
        </div>
        <div className="stat">
          <span className="stat-label">Total Trees Goal</span>
          <span className="stat-value">{data.totalTreesGoal}</span>
        </div>
      </div>
      <div className="progress-group">
        <div className="circular-progress-container">
          <CircularProgressbar
            value={plantingProgress}
            text={`${plantingProgress}%`}
            styles={buildStyles({
              pathColor: `rgba(62, 152, 199, ${plantingProgress / 100})`,
              textColor: '#fff',
              trailColor: '#d6d6d6',
              backgroundColor: '#3e98c7',
            })}
          />
        </div>
        <div className="progress-label">Planting Completed</div>
      </div>
      <div className="progress-group">
        <div className="circular-progress-container">
          <CircularProgressbar
            value={carbonOffsetProgress}
            text={`${carbonOffsetProgress}%`}
            styles={buildStyles({
              pathColor: `rgba(255, 68, 68, ${carbonOffsetProgress / 100})`,
              textColor: '#fff',
              trailColor: '#d6d6d6',
              backgroundColor: '#ff4444',
            })}
          />
        </div>
        <div className="progress-label">Carbon Offset</div>
      </div>
    </div>
  );
};

export default EnvironmentalCard;
