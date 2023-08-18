import { useState, useEffect } from 'react'

const COHORT_NAME = '2306-ghp-et-web-ft-sf'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`


export default function Posts() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        async function fetchAllPosts() {
            try {
                const response = await fetch(`${BASE_URL}/posts`);
                const result = await response.json();
                console.log(result)
                setPosts(result.data.posts)
            } catch (error) {
                console.error(error);
            }
        }
        fetchAllPosts();
    }, [])
    return (
        <div>
            <h1>ALL POSTS</h1>
            <div>
                {
                    posts.map((post) => {
                        return (
                            <div>
                                <h4>Username: {post.author.username}</h4>
                                {/* <h4>Breed: {player.breed}</h4>
                                <img src={player.imageUrl} alt={player.name} />
                                <Link to={`/SinglePlayer/${player.id}`}>See Details</Link> */}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}