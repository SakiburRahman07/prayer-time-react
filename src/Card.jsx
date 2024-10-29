import React from 'react';
import './index.css';

function Card({ prayerName, time }) {
  return (
    <div className="card">
      <img src="https://cdn.pixabay.com/photo/2019/07/03/09/43/clock-4314041_1280.jpg" alt="clock" />
      <h2>{prayerName}</h2>
      <p>Time: {time}</p>
    </div>
  );
}

export default Card;