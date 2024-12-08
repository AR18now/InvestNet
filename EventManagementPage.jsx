import React, { useState } from "react";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import "./EventManagementPage.css";

const EventManagementPage = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      name: "Tech Startup Meetup",
      date: "2024-07-15",
      location: "San Francisco",
      description: "An event to connect tech startup founders with investors.",
    },
    {
      id: 2,
      name: "AI Innovation Summit",
      date: "2024-08-10",
      location: "New York",
      description: "Discussing the future of AI and machine learning.",
    },
  ]);

  const [newEvent, setNewEvent] = useState({
    name: "",
    date: "",
    location: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  const addEvent = () => {
    if (
      newEvent.name &&
      newEvent.date &&
      newEvent.location &&
      newEvent.description
    ) {
      setEvents([...events, { ...newEvent, id: events.length + 1 }]);
      setNewEvent({ name: "", date: "", location: "", description: "" });
    }
  };

  const deleteEvent = (id) => {
    setEvents(events.filter((event) => event.id !== id));
  };

  return (
    <div className="event-management-page">
      <Header title="Event Management" />
      <div className="content-container">
        <Sidebar />
        <div className="event-content">
          {/* Add New Event Section */}
          <div className="add-event">
            <h2>Add New Event</h2>
            <div className="event-form">
              <input
                type="text"
                name="name"
                placeholder="Event Name"
                value={newEvent.name}
                onChange={handleInputChange}
              />
              <input
                type="date"
                name="date"
                value={newEvent.date}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="location"
                placeholder="Location"
                value={newEvent.location}
                onChange={handleInputChange}
              />
              <textarea
                name="description"
                placeholder="Event Description"
                value={newEvent.description}
                onChange={handleInputChange}
              ></textarea>
              <button onClick={addEvent}>Add Event</button>
            </div>
          </div>

          {/* Event List Section */}
          <div className="event-list">
            <h2>Upcoming Events</h2>
            {events.length > 0 ? (
              <ul>
                {events.map((event) => (
                  <li key={event.id} className="event-card">
                    <h3>{event.name}</h3>
                    <p>
                      <strong>Date:</strong> {event.date}
                    </p>
                    <p>
                      <strong>Location:</strong> {event.location}
                    </p>
                    <p>{event.description}</p>
                    <button onClick={() => deleteEvent(event.id)}>
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No events available. Add a new event to get started!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventManagementPage;
