import { useState } from "react"
import { useSelector } from "react-redux"
const COHORT_NAME = '2306-ghp-et-web-ft-sf'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

export default function Login({ token, setToken }) {
    const [successMessage, setSuccessMessage] = useState(null);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const authorizedUsers = useSelector(state => state.authenticate)
    console.log(authorizedUsers)
    // const authorizedPassword = useSelector(state => state.authenticate.password)
    async function handleClick() {

        try {
            const response = await fetch(`${BASE_URL}/users/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                    body: JSON.stringify({ 
                        user: {
                            username: 'thegoodplace',
                            password: 'youpassed' 
                    } 
                })
            });
            const result = await response.json();
            console.log(`what i get ${JSON.stringify(result)}`)
            console.log(result.message);
            if (result.success) {
                setSuccessMessage('Awesome')
            } else {
                console.log("not authorized")
            }

        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <>
            <h2>Log in</h2>
            {successMessage && <p>{successMessage}</p>}
            {error && <p>{error}</p>}
            <button onClick={handleClick}>Authenticate Token</button>
            {/* <form onSubmit={handleClick}>
                <label>
                    Username: <input value={username} onChange={(e) => setUsername(e.target.value)} />
                </label><br />
                <label>
                    Password: <input value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <br></br>
                <button>Submit</button>
            </form> */}
        </>
    );
}
