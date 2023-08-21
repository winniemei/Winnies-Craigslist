import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { setCredentials } from "../redux/authenticateSlice"
import { useNavigate } from "react-router-dom"
import { selectCurrentToken, selectCurrentUser } from "../redux/authenticateSlice"

const COHORT_NAME = '2306-ghp-et-web-ft-sf'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

export default function Login({ token, setToken }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [successMessage, setSuccessMessage] = useState(null);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    async function handleClick() {
        try {
            const response = await fetch(`${BASE_URL}/users/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                    body: JSON.stringify({ 
                        user: {
                            username: `${username}`,
                            password: `${password}` 
                    } 
                })
            });
            const result = await response.json();
            console.log(`what i get ${JSON.stringify(result)}`)
            dispatch(setCredentials({
                user: username,
                token: result.data.token
            }));
            if (result.success) {
                setSuccessMessage('Awesome');
                navigate('/posts');
            } else {
                alert("Yikes! You are not authorized!")
                console.log("not authorized")
            }

        } catch (error) {
            console.log("ERROR")
            setError(error.message);
        }
    }

    return (
        <>
            <h2>Log in</h2>
            {successMessage && <p>{successMessage}</p>}
            {error && <p>{error}</p>}
            <div>
            <form className="formGroup">
                <label>
                    Username: <input className="inputField" value={username} onChange={(e) => setUsername(e.target.value)} />
                </label><br />
                <label>
                    Password: <input className="inputField" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <br></br>
                <button type="button" onClick={handleClick}>Submit</button>
            </form>
            </div>
        </>
    );
}
