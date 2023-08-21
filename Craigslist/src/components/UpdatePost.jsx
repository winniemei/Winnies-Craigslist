import React, { useState } from "react";
import { selectCurrentToken, selectCurrentUser } from "../redux/authenticateSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { editPost } from "../api";

export default function UpdatePost({ post, token, posts, setPosts}) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("");
    const [willDeliver, setWillDeliver] = useState("")
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const currentToken = useSelector(selectCurrentToken)


    async function handleSubmit(e) {
      e.preventDefault();
      const APIData = await editPost(title, description, price, willDeliver, currentToken, "64e3d72c555d2f00149d0958");
      console.log(currentToken)
      console.log(posts)
      console.log(post)
      if (APIData.success) {
          console.log("New Player: ", APIData);
          alert("Congrats!! You edited a post!")
          navigate('/posts')
      } else {
        console.log(APIData)
        console.log(post)
        console.log(posts)
          alert("Apologies -- you have to be logged in and enter a valid post. Make sure to set delivery to either true or false.")
      }
  }

    return (
            <div className="formGroup">
            <form onSubmit={handleSubmit}>
                {error && <p>{error}</p>}
                <input
                    className="inputField"
                    value={title}
                    type="text"
                    name="title"
                    placeholder="title"
                    onChange={(e) => setTitle(e.target.value)}
                /><br />
                <input
                    className="inputField"
                    value={price}
                    type="text"
                    name="price"
                    placeholder="price"
                    onChange={(e) => setPrice(e.target.value)}
                /><br />
                <input
                    className="inputField"
                    value={description}
                    type="text"
                    name="description"
                    placeholder="description"
                    onChange={(e) => setDescription(e.target.value)}
                /><br />
                <input
                    className="inputField"
                    value={willDeliver}
                    type="text"
                    name="willDeliver"
                    placeholder="willDeliver"
                    onChange={(e) => setWillDeliver(e.target.value)}
                /><br /><br />
                <button>Submit</button>
            </form>
        </div>
    );
}
