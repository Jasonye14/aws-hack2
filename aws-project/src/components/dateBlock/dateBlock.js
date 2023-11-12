import React, { useState, useEffect } from 'react';
import './dateBlock.css'; // make sure to create this CSS file

const DateDisplay = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every second

    return () => {
      clearInterval(timer); // Clean up the interval on unmount
    };
  }, []);

  const formatDate = (date) => {
    const options = { weekday: 'long', year: 'numeric', month: '2-digit', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  const formatTime = (date) => {
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
    return date.toLocaleTimeString('en-US', options);
  };

  return (
    <div className="date-display-container">
      <div className="date-section">{formatDate(currentTime)}</div>
      <div className="time-section">{formatTime(currentTime)}</div>
    </div>
  );
};

export default DateDisplay;
