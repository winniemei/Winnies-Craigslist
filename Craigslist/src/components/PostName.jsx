import React from "react";
import { useNavigate } from "react-router-dom"
import { useState } from 'react'
import { deletePost } from "../api"

export default function PostName({ post, token }) {
  const navigate = useNavigate();

  async function handleDelete() {
    try {
      const result = await deletePost(post._id, token);
      console.log(result);
      navigate("/Posts");
    } catch (error) {
      console.error(error);
    } 
    
  }
  return (
    <div>
      <p>{post.author.username}</p>
      <p>{post.title}</p>
      <p>{post.price}</p>
      <button type="button" onClick={handleDelete}>Delete Post</button>
    </div>
  );
}