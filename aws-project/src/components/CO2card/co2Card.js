import React from 'react';
import './co2Card.css';

const CO2Card = () => {
  const co2Data = {
    totalEmissions: 60, // in thousands of tons
    emissionGoal: 150, // the goal in thousands of tons
    reductionTarget: 25, // target reduction percentage
    reductionAchieved: 15, // current reduction percentage
    projectsInvolved: 5, // number of CO2 offset projects
    projectGoal: 10, // goal for the number of CO2 offset projects
  };

  return (
    <div className="card">
      <h2>CO2 Emissions Tracking</h2>
      <div className="stat stat-total-emissions">
        <div className="stat-title">Total Emissions</div>
        <div className="stat-value">{co2Data.totalEmissions}k tons</div>
        <div className="stat-bar">
          <div className="stat-progress" style={{ width: `${(co2Data.totalEmissions / co2Data.emissionGoal) * 100}%` }}></div>
        </div>
      </div>
      <div className="stat stat-reduction-target">
        <div className="stat-title">Reduction Target</div>
        <div className="stat-value">{co2Data.reductionTarget}%</div>
        <div className="stat-bar">
          <div className="stat-progress" style={{ width: `${(co2Data.reductionAchieved / co2Data.reductionTarget) * 100}%` }}></div>
        </div>
      </div>
      <div className="stat stat-offset-projects">
        <div className="stat-title">Offset Projects</div>
        <div className="stat-value">{co2Data.projectsInvolved}</div>
        <div className="stat-bar">
          <div className="stat-progress" style={{ width: `${(co2Data.projectsInvolved / co2Data.projectGoal) * 100}%` }}></div>
        </div>
      </div>
    </div>
  );
};

export default CO2Card;
