import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar/Sidebar"; // Your existing Sidebar
import Header from "../components/Header/Header"; // Your existing Header
import Post from "../components/Post/Post";
import CreatePost from "../components/CreatePost/CreatePost";
import FilterPanel from "../components/FilterPanel/FilterPanel";
import "./FeedPage.css";

const FeedPage = () => {
  const [posts, setPosts] = useState([]);
  const [filters, setFilters] = useState({
    date: "All",
    type: "All",
  });

  useEffect(() => {
    // Fetch posts or use mock data
    const fetchPosts = async () => {
      const fetchedPosts = [
        {
          id: 1,
          author: "John Doe",
          content: "Attended a seminar on AI.",
          image: "https://via.placeholder.com/500",
          likes: 120,
          comments: 50,
          shares: 10,
          timestamp: "2 hours ago",
        },
        // Add more mock posts...
      ];
      setPosts(fetchedPosts);
    };

    fetchPosts();
  }, [filters]);

  return (
    <div className="feed-page">
      <Sidebar /> {/* Existing Sidebar */}
      <div className="feed-content">
        <Header /> {/* Existing Header */}
        <div className="feed-main">
          <FilterPanel setFilters={setFilters} />
          <CreatePost />
          <div className="post-feed">
            {posts.map((post) => (
              <Post key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedPage;
