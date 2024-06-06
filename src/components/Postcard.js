import React from "react";
import "./PostCard.css";

function PostCard({ title, content, imageUrl }) {
  return (
    <div className="post-card">
      <img src={imageUrl} alt="Post" className="post-image" />
      <div className="post-content">
        <h3 className="post-title">{title}</h3>
        <p className="post-description">{content}</p>
      </div>
    </div>
  );
}

export default PostCard;
