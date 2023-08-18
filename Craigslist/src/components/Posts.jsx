import { useState, useEffect } from 'react'

const COHORT_NAME = '2306-ghp-et-web-ft-sf'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`


export default function Posts() {
    const [posts, setPosts] = useState([]);
    const [searchParam, setSearchParam] = useState("");
    useEffect(() => {
        async function fetchAllPosts() {
            try {
                const response = await fetch(`${BASE_URL}/posts`);
                const result = await response.json();
                setPosts(result.data.posts)
                console.log(posts)
            } catch (error) {
                console.error(error);
            }
        }
        fetchAllPosts();
    }, []);

    const postsToDisplay = searchParam
        ? posts.filter((post) =>
            post.author.username.toLowerCase().includes(searchParam)
        )
        : posts;

    return (
        <div>
            <h1>ALL POSTS</h1>
            <div>
                <label>
                    Search:{" "}
                    <input
                        type="text"
                        placeholder="search"
                        onChange={(e) => setSearchParam(e.target.value.toLowerCase())}
                    />
                </label>
            </div>
            <div>
                {
                    posts.map((post) => {
                        return (
                            <div>
                                <h4>Username: {post.author.username}</h4>
                                <h4>Title: {post.title}</h4>
                                <h4>Description: {post.description}</h4>
                                <h4>Price: {post.price}</h4>
                                {/* <Link to={`/SinglePlayer/${player.id}`}>See Details</Link> */}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}