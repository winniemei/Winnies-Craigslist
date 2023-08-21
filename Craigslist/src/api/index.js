import PostName from "../components/PostName";
import Posts from "../components/Posts";
import { useNavigate } from "react-router-dom";

const COHORT_NAME = '2306-ghp-et-web-ft-sf'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

export async function makePost(title, description, price, willDeliver, token) {
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

export async function editPost(title, description, price, willDeliver, token, id) {
  try {
    const response = await fetch(`${BASE_URL}/posts/${id}`, {
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

export async function deletePost(id, token) {
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