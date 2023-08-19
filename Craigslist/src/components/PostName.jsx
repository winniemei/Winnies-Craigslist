import React from "react";
import { useNavigate } from "react-router-dom"
import { useState } from 'react'
import { deletePost } from "../api"

export default function PostName({ post, token, posts, setPosts }) {
  const navigate = useNavigate();

  async function handleDelete() {
    try {
      const result = await deletePost(post._id, token);

      const updatedPosts = posts.filter((selectedPost) => selectedPost._id !== post._id)
      console.log(result);
      setPosts(updatedPosts);
      navigate("/posts");
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