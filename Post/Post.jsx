import React from "react";
import "./Post.css";

const Post = ({ post }) => {
  return (
    <div className="post">
      <div className="post-header">
        <div className="author-info">
          <img
            src="https://via.placeholder.com/40"
            alt="Author"
            className="author-pic"
          />
          <span className="author-name">{post.author}</span>
          <span className="post-time">{post.timestamp}</span>
        </div>
      </div>
      <div className="post-content">
        <p>{post.content}</p>
        {post.image && <img src={post.image} alt="Post content" />}
      </div>
      <div className="post-actions">
        <span>{post.likes} Likes</span>
        <span>{post.comments} Comments</span>
        <span>{post.shares} Shares</span>
      </div>
    </div>
  );
};

export default Post;
