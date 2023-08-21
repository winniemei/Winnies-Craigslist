import PostName from "../components/PostName";
import Posts from "../components/Posts";
import { useNavigate } from "react-router-dom";

const COHORT_NAME = '2306-ghp-et-web-ft-sf'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

export async function makePost(title, description, price, willDeliver, {token}) {
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGUxMzQ0YWJlYjkzNTAwMTRjM2JjODMiLCJ1c2VybmFtZSI6IkhBUFBZR09MVUNLWSIsImlhdCI6MTY5MjQ4MDU4Nn0.cKe3kM_V1AbPnOSrHwoiqYK6n9Z1tQdAoVgKSjdALeU"
  try {
    const response = await fetch(`${BASE_URL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        post: {
          title: title,
          description: description,
          price: price,
          willDeliver: willDeliver
        }
      })
    });
    
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function deletePost(id, { token }) {
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGUxMzQ0YWJlYjkzNTAwMTRjM2JjODMiLCJ1c2VybmFtZSI6IkhBUFBZR09MVUNLWSIsImlhdCI6MTY5MjQ4MDU4Nn0.cKe3kM_V1AbPnOSrHwoiqYK6n9Z1tQdAoVgKSjdALeU"
  try {
    const response = await fetch(`${BASE_URL}/posts/${id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.log(error)
    console.error(error);
  }
}