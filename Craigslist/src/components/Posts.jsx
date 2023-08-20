import { useState, useEffect } from 'react'
import PostName from './PostName';

const COHORT_NAME = '2306-ghp-et-web-ft-sf'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`


export default function Posts({token}) {
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
            <div>
                <label>
                    Search:{" "}
                    <input
                        type="text"
                        placeholder="Search by author"
                        onChange={(e) => setSearchParam(e.target.value.toLowerCase())}
                    />
                </label>
            </div>
            <div>
            <div id="cardContainer">
                {postsToDisplay.map((post) => {
                    return <PostName key={post.id} post={post} token={token} posts={posts} setPosts={setPosts}/>;
                })}
            </div>
            </div>
        </div>
    )
}