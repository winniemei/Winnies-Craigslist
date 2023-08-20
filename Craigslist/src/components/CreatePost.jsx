import React, { useState } from "react";
import { makePost } from "../api";
import { selectCurrentToken, selectCurrentUser } from "../redux/authenticateSlice";
import { useSelector } from "react-redux";

export default function CreatePost({ posts, setPosts, token }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("");
    const [willDeliver, setWillDeliver] = useState("")
    const [error, setError] = useState(null);

    async function handleSubmit(e) {
        e.preventDefault();
        
        const APIData = await makePost(title, description, price, willDeliver, token);
        console.log(selectCurrentToken)
        if (APIData.success) {
            console.log("New Player: ", APIData);

            // Resetting all players manually
            //   const newPlayersList = [...players, APIData.data.newPlayer];
            //   setPlayers(newPlayersList);

            //   setName("");
            //   setBreed("");
        } else {
            alert("Apologies -- you have to enter a valid post. Make sure to set delivery to either true or false.")
        }
    }

    return (
        <div className="formGroup">
        <form onSubmit={handleSubmit}>
            {error && <p>{error}</p>}
            <input
                value={title}
                type="text"
                name="title"
                placeholder="title"
                onChange={(e) => setTitle(e.target.value)}
            /><br />
            <input
                value={price}
                type="text"
                name="price"
                placeholder="price"
                onChange={(e) => setPrice(e.target.value)}
            /><br />
            <input
                value={description}
                type="text"
                name="description"
                placeholder="description"
                onChange={(e) => setDescription(e.target.value)}
            /><br />
            <input
                value={willDeliver}
                type="text"
                name="willDeliver"
                placeholder="willDeliver"
                onChange={(e) => setWillDeliver(e.target.value)}
            /><br />
            <button>Submit</button>
        </form>
        </div>
    );
}
