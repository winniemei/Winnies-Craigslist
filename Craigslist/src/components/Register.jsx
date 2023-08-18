import { useState } from 'react'
const COHORT_NAME = '2306-ghp-et-web-ft-sf'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

export default function Register({token, setToken}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [successMessage, setSuccessMessage] = useState(null);
    const [error, setError] = useState(null);
    
    async function handleSubmit(event) {
        event.preventDefault();
        try {
            if ({username}.username.length >= 8) {
            const response = await fetch(`${BASE_URL}/users/register`,{
                method: "POST",
                body: JSON.stringify({user: {username, password}}),
                headers: {"content-type": "application/json"}
            });
            const result = await response.json()
            console.log(result)
            setToken(result.data.token);
            setSuccessMessage("Sign up successful! Please log in!");
            console.log(token)
        } else {
            alert ("Username too short. Please enter at least 8 characters.")
            setUsername("");
            setPassword("");
            setToken("");
            setSuccessMessage("");
            // console.log(`ayooooo ${token}`);
        }
        } catch (error) {
            setError(error.message);
        }
    }
    
    return (
        
    <>
    <h2>Sign up</h2>
    {successMessage && <p>{successMessage}</p>}
    <form onSubmit ={handleSubmit}>
        <label>
            Username: <input value={username} onChange={(e) => setUsername(e.target.value)}/>
        </label><br/>
        <label>
            Password: <input value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br></br>
        <button>Submit</button>
    </form>
    </>
    )
}