import React, { useState } from 'react';

const EventForm = ({ addEvent }) => {
  const [eventTitle, setEventTitle] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEvent = {
      title: eventTitle,
      date: eventDate,
      imageUrl: imageUrl,
    };

    addEvent(newEvent);

    // Clear form fields
    setEventTitle('');
    setEventDate('');
    setImageUrl('');
  };

  return (
    <div>
      <h2>Add a New Event</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={eventTitle}
            onChange={(e) => setEventTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Date:</label>
          <input
            type="date"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Image URL:</label>
          <input
            type="url"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            required
          />
        </div>

        <button type="submit">Add Event</button>
      </form>
    </div>
  );
};

export default EventForm;
