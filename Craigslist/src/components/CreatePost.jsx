import React, { useState } from "react";
import { makePost } from "../api";

export default function CreatePost({ posts, setPosts, token}) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    const APIData = await makePost(price, title, token);
    if (APIData.success) {
      console.log("New Player: ", APIData);

      // Resetting all players manually
    //   const newPlayersList = [...players, APIData.data.newPlayer];
    //   setPlayers(newPlayersList);

    //   setName("");
    //   setBreed("");
    } else {
      setError(APIData.error.message);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {error && <p>{error}</p>}
      {/* <input
        value={price}
        type="text"
        name="price"
        placeholder="price"
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        value={title}
        type="text"
        name="title"
        placeholder="title"
        onChange={(e) => setTitle(e.target.value)}
      /> */}
      <button>Submit</button>
    </form>
  );
}
