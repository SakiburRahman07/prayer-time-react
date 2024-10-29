import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card.jsx';

function App() {
  const [prayerTimes, setPrayerTimes] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPrayerTimes = async () => {
      const date = new Date().toISOString().split('T')[0]; 
      const city = 'Dhaka'; 
      const country = 'BD'; 

      try {
        const response = await axios.get(`http://api.aladhan.com/v1/timingsByCity/${date}`, {
          params: {
            city,
            country,
          },
        });
        setPrayerTimes(response.data.data.timings);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch prayer times');
        setLoading(false);
      }
    };

    fetchPrayerTimes();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="prayer-times-container">
      {Object.entries(prayerTimes).map(([key, value]) => (
        <Card key={key} prayerName={key} time={value} />
      ))}
    </div>
  );
}

export default App;