import PostName from "../components/PostName";
import Posts from "../components/Posts";

const COHORT_NAME = '2306-ghp-et-web-ft-sf'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`


export async function deletePost(id, {token}) {
    token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGRmZmI1ZmQ3YTIxNjAwMTQzMmJmYTYiLCJ1c2VybmFtZSI6Indpbm5pZWhleSIsImlhdCI6MTY5MjQ3NjgxMX0.ydvhAGvuRo-u_H6g1AHAO9wlF_S6ya76Cq3JCWneZT8"
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