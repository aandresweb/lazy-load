import React from "react";
import "boxicons";
import "./index.css";

function PostCard({ post }) {
  return (
    <div>
      <div className="post-card">
        <p className="post-title text mb-small">{post.title}</p>
        <p className="text mb-medium">{post.body}</p>
        <p className="post-info">
          <span className="post-author">
            <box-icon color="#d3d3d3" name="user"></box-icon>
            <small className="post-info-text text">Andres Godinez</small>
          </span>
          <span className="post-date">
            <box-icon color="#d3d3d3" name="calendar"></box-icon>
            <small className="post-info-text text">Dec 10th 2022</small>
          </span>
        </p>
      </div>
    </div>
  );
}

export default PostCard;
