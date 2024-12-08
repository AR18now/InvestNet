import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">InvestNet</div>
      <input type="text" placeholder="Search" className="search-bar" />
      <button className="dark-theme-toggle">Dark Theme</button>
    </header>
  );
};

export default Header;
