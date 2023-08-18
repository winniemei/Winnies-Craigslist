import { useState, useEffect } from 'react'
import PostName from './PostName';

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
                        placeholder="Search by username"
                        onChange={(e) => setSearchParam(e.target.value.toLowerCase())}
                    />
                </label>
            </div>
            <div>
                {postsToDisplay.map((post) => {
                    return <PostName key={post.id} post={post}/>;
                })}
            </div>
        </div>
    )
}