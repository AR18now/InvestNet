import React from "react";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="sidebar">
      <ul>
        <li onClick={() => handleNavigation("/profile")}>Profile</li>
        <li onClick={() => handleNavigation("/messages")}>Messages</li>
        <li onClick={() => handleNavigation("/notifications")}>
          Notifications
        </li>
        <li onClick={() => handleNavigation("/business")}>Business</li>
        <li onClick={() => handleNavigation("/posts")}>Posts</li>
        <li onClick={() => handleNavigation("/payments")}>Payments</li>
        <li onClick={() => handleNavigation("/profile-views")}>
          Profile Views
        </li>
        <li onClick={() => handleNavigation("/eventmanagement")}>
          Event Management
        </li>
        <li onClick={() => handleNavigation("/login")}>Logout</li>
      </ul>
    </div>
  );
};

export default Sidebar;
