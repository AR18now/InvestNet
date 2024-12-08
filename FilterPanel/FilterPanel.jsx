import React from "react";
import "./FilterPanel.css";

const FilterPanel = ({ setFilters }) => {
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <div className="filter-panel">
      <select name="date" onChange={handleFilterChange}>
        <option value="All">All Dates</option>
        <option value="Today">Today</option>
        <option value="This Week">This Week</option>
        <option value="This Month">This Month</option>
      </select>
      <select name="type" onChange={handleFilterChange}>
        <option value="All">All Types</option>
        <option value="Text">Text</option>
        <option value="Image">Image</option>
        <option value="Video">Video</option>
      </select>
    </div>
  );
};

export default FilterPanel;
