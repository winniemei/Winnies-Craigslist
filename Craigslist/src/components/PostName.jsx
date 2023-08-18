import React from "react";
import { useNavigate } from "react-router-dom";

export default function PostName({ post }) {
  const navigate = useNavigate();
  return (
    <div>
      <h3>Username: {post.author.username}</h3>
      <h3>Title: {post.title}</h3>
      <button
        onClick={() => {
          navigate(`/${post.id}`);
        }}
      >
        See Details
      </button>
    </div>
  );
}
