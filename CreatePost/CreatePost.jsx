import React from "react";
import "./CreatePost.css";

const CreatePost = () => {
  return (
    <div className="create-post-card">
      <textarea placeholder="What's on your mind?"></textarea>
      <button>Post</button>
    </div>
  );
};

export default CreatePost;
