import React from "react";
import Sidebar from "../components/Sidebar/Sidebar"; // Reusable Sidebar component
import Header from "../components/Header/Header"; // Reusable Header component
import "./ProfileViewsPage.css";

const ProfileViewsPage = () => {
  const insights = {
    totalViews: 320,
    postEngagement: 120,
    connectionsGrowth: 30,
  };

  const recentViewers = [
    {
      id: 1,
      name: "Jane Doe",
      title: "Software Engineer",
      location: "New York",
    },
    {
      id: 2,
      name: "John Smith",
      title: "Product Manager",
      location: "California",
    },
    {
      id: 3,
      name: "Emily Johnson",
      title: "Data Scientist",
      location: "Texas",
    },
    { id: 4, name: "Michael Brown", title: "UX Designer", location: "Florida" },
  ];

  const searchActivity = {
    queries: ["Tech startups", "Web development"],
    locations: ["New York", "California", "Texas"],
    titles: ["Software Engineer", "CEO", "Freelancer"],
  };

  const postEngagement = [
    { id: 1, title: "My Journey in Tech", likes: 80, comments: 20, shares: 10 },
    {
      id: 2,
      title: "Tips for Coding Interviews",
      likes: 60,
      comments: 15,
      shares: 8,
    },
  ];

  return (
    <div className="profile-views-page">
      <Sidebar />
      <div className="content">
        <Header />

        {/* Insights Summary */}
        <section className="insights-summary">
          <h2>Insights Summary</h2>
          <div className="stats">
            <div className="stat-card">
              <h3>{insights.totalViews}</h3>
              <p>Total Profile Views</p>
            </div>
            <div className="stat-card">
              <h3>{insights.postEngagement}</h3>
              <p>Post Engagements</p>
            </div>
            <div className="stat-card">
              <h3>{insights.connectionsGrowth}</h3>
              <p>Connections Growth</p>
            </div>
          </div>
        </section>

        {/* Recent Viewers */}
        <section className="recent-viewers">
          <h2>Recent Viewers</h2>
          <ul>
            {recentViewers.map((viewer) => (
              <li key={viewer.id} className="viewer-card">
                <h3>{viewer.name}</h3>
                <p>{viewer.title}</p>
                <p>{viewer.location}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Search Activity */}
        <section className="search-activity">
          <h2>Search Activity Insights</h2>
          <div className="activity-details">
            <div>
              <h4>Search Queries</h4>
              <ul>
                {searchActivity.queries.map((query, index) => (
                  <li key={index}>{query}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4>Top Locations</h4>
              <ul>
                {searchActivity.locations.map((location, index) => (
                  <li key={index}>{location}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4>Top Job Titles</h4>
              <ul>
                {searchActivity.titles.map((title, index) => (
                  <li key={index}>{title}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Post Engagement */}
        <section className="post-engagement">
          <h2>Top-Performing Posts</h2>
          <ul>
            {postEngagement.map((post) => (
              <li key={post.id} className="post-card">
                <h3>{post.title}</h3>
                <p>Likes: {post.likes}</p>
                <p>Comments: {post.comments}</p>
                <p>Shares: {post.shares}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default ProfileViewsPage;
