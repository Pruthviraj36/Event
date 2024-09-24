// src/App.js
import React, { useState } from 'react';
import EventForm from './EventForm';
import './App.css';

const App = () => {
  const [events, setEvents] = useState([]);

  const addEvent = (event) => {
    setEvents([...events, event]);
  };

  return (
    <div className="container">
      <h1>Event Management</h1>
      <EventForm addEvent={addEvent} />

      <h2>Event List</h2>
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            <strong>{event.title}</strong> on {event.date}
            {event.imageUrl && <img src={event.imageUrl} alt={event.title} />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
