// Events.js
import { useState } from "react";
import '../App.css';

function Events() {
  const [events, setEvents] = useState([
    { id: 1, title: "Community Prayer", date: "2025-03-15", location: "Church Hall", category: "Religious" },
    { id: 2, title: "Charity Fundraiser", date: "2025-03-20", location: "City Center", category: "Charity" }
  ]);
  const [filter, setFilter] = useState("");
  const [newEvent, setNewEvent] = useState({ title: "", date: "", location: "", category: "" });

  const filteredEvents = filter ? events.filter(event => event.category === filter) : events;
  
  const addEvent = () => {
    setEvents([...events, { ...newEvent, id: events.length + 1 }]);
    setNewEvent({ title: "", date: "", location: "", category: "" });
  };

  return (
    <div className="events-container">
      <h2 className="events-title">Events</h2>
      <select className="filter-dropdown" onChange={(e) => setFilter(e.target.value)}>
        <option value="">All Categories</option>
        <option value="Religious">Religious</option>
        <option value="Charity">Charity</option>
      </select>
      <ul className="events-list">
        {filteredEvents.map(event => (
          <li key={event.id} className="event-item">
            <h3 className="event-title">{event.title}</h3>
            <p>{event.date} - {event.location}</p>
            <p className="event-category">Category: {event.category}</p>
          </li>
        ))}
      </ul>
      <h3 className="add-event-title">Add Event</h3>
      <input className="input-field" placeholder="Title" value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
      <input className="input-field" placeholder="Date" value={newEvent.date} onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })} />
      <input className="input-field" placeholder="Location" value={newEvent.location} onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })} />
      <select className="input-field" value={newEvent.category} onChange={(e) => setNewEvent({ ...newEvent, category: e.target.value })}>
        <option value="">Category</option>
        <option value="Religious">Religious</option>
        <option value="Charity">Charity</option>
      </select>
      <button className="add-button" onClick={addEvent}>Add</button>
    </div>
  );
}

export default Events;