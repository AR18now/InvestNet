import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header"; // Assuming you have a header component
import Sidebar from "../components/Sidebar/Sidebar"; // Import Sidebar component
import "./Notifications.css"; // Ensure the CSS is properly applied

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Simulating fetching notifications from an API
    const fetchNotifications = async () => {
      const newNotifications = [
        {
          id: 1,
          message: "John commented on your post",
          time: "2 minutes ago",
        },
        {
          id: 2,
          message: "Sarah sent you a connection request",
          time: "10 minutes ago",
        },
        { id: 3, message: "Mike liked your photo", time: "1 hour ago" },
        {
          id: 4,
          message: "New job recommendation for you",
          time: "5 hours ago",
        },
      ];
      setNotifications(newNotifications);
    };

    fetchNotifications();
  }, []);

  return (
    <div className="notifications-container">
      <Sidebar /> {/* Include Sidebar */}
      <div className="notifications-content">
        <Header />
        <div className="content-wrapper">
          <div className="search-bar">
            <input type="text" placeholder="Search notifications..." />
          </div>
          <div className="notification-list">
            {notifications.map((notification) => (
              <div key={notification.id} className="notification-card">
                <p className="notification-message">{notification.message}</p>
                <span className="notification-time">{notification.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
