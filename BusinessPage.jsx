import React, { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar"; // Import Sidebar component
import "./BusinessPage.css"; // Ensure that your styles are correctly applied

const business = [
  {
    id: 1,
    name: "John Doe",
    description: "Angel investor focused on tech startups.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Jane Smith",
    description: "Venture capitalist with a passion for innovation.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Alan Turing",
    description: "Investing in AI and machine learning projects.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Bill Gates",
    description: "Philanthropist and tech entrepreneur.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    name: "Mark Zuckerberg",
    description: "Founder of Facebook and social media pioneer.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    name: "Elon Musk",
    description: "CEO of Tesla and SpaceX, focused on innovation.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 7,
    name: "Warren Buffet",
    description: "Investing with a long-term value approach.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 8,
    name: "Oprah Winfrey",
    description: "Media mogul with diverse investments.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 9,
    name: "Richard Branson",
    description: "Founder of Virgin Group and space tourism advocate.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 10,
    name: "Sheryl Sandberg",
    description: "Former Facebook COO and advocate for women in tech.",
    image: "https://via.placeholder.com/150",
  },
];

const BusinessPage = () => {
  const [searchQuery, setSearchQuery] = useState(""); // State to store search query

  // Filter investors based on the search query
  const filteredBusinesses = business.filter((business) =>
    business.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="business-page-container">
      {/* Sidebar Component */}
      <Sidebar />

      {/* business Content */}
      <div className="business-page-content">
        <h2>Businesses</h2>

        {/* Search Bar */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>

        {/* Investor Grid */}
        <div className="business-grid">
          {filteredBusinesses.map((business) => (
            <div key={business.id} className="business-card">
              <img
                src={business.image}
                alt={`${business.name}'s profile`}
                className="business-image"
              />
              <h3>{business.name}</h3>
              <p>{business.description}</p>
              <button>View Details</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusinessPage;
