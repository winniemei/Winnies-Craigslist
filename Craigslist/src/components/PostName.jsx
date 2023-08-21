import React from "react";
import { useNavigate } from "react-router-dom"
import { useState } from 'react'
import { deletePost, editPost } from "../api"
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../redux/authenticateSlice";
import UpdatePost from "./UpdatePost";

export default function PostName({ post, token, posts, setPosts}) {
  const navigate = useNavigate();
  const currentToken = useSelector(selectCurrentToken)

  async function handleDelete() {
    try {
      const result = await deletePost(post._id, currentToken);

      const updatedPosts = posts.filter((selectedPost) => selectedPost._id !== post._id)
      console.log(result);
      setPosts(updatedPosts);
      navigate("/posts");
    } catch (error) {
      console.error(error);
    } 
    
  }

  async function handleEdit() {
    try {
      <UpdatePost post={post}/>
      navigate("/updatePost")
    } catch (error) {
      console.error(error);
    } 
    
  }

  return (
    <div>
      <div className="postCard">
        <h3>Title: {post.title}</h3>
        <p>Author: {post.author.username}</p>
        <p>Description: {post.description}</p>
        <p>Price: {post.price}</p><br></br>
        <button type="button" onClick={handleDelete}>Delete Post</button>
        <button type="button" onClick={handleEdit}>Edit</button>
      </div>
    </div>
  );
}