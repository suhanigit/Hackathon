import React, { useState } from 'react';
import axios from 'axios';
import './LiveFeed.css';

const LiveFeed = () => {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [status, setStatus] = useState(null);
  const [dateTime, setDateTime] = useState('');

  // Handle form submission to fetch status from an API
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Here, you would replace this with the actual API endpoint
      const response = await axios.get(`https://api.example.com/status?lat=${latitude}&lng=${longitude}`);
      
      // Mock API response data
      const data = {
        status: response.data.status,  // "alive", "injured", or "buried"
        dateTime: new Date().toLocaleString(),  // Current date-time
      };

      setStatus(data.status);
      setDateTime(data.dateTime);
    } catch (error) {
      console.error('Error fetching status:', error);
    }
  };

  // Function to determine the background color based on status
  const getStatusColor = (status) => {
    switch (status) {
      case 'alive':
        return 'green';
      case 'injured':
        return 'yellow';
      case 'buried':
        return 'red';
      default:
        return 'gray';
    }
  };

  return (
    <div className="live-feed">
      <h1>Live Feed</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Latitude:</label>
          <input
            type="number"
            step="any"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
            placeholder="Enter Latitude"
            required
          />
        </div>
        <div className="input-group">
          <label>Longitude:</label>
          <input
            type="number"
            step="any"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
            placeholder="Enter Longitude"
            required
          />
        </div>
        <button type="submit">Get Status</button>
      </form>

      {status && (
        <div className="status-box" style={{ backgroundColor: getStatusColor(status) }}>
          <p>Status: {status}</p>
          <p>Location: Latitude: {latitude}, Longitude: {longitude}</p>
          <p>Date/Time: {dateTime}</p>
        </div>
      )}
    </div>
  );
};

export default LiveFeed;
