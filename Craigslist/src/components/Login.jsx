import { useState } from "react";
const COHORT_NAME = '2306-ghp-et-web-ft-sf'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

export default function Login({ token, setToken}) {
    const [successMessage, setSuccessMessage] = useState(null);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    async function handleClick() {
        try {
            const response = await fetch(`${BASE_URL}/users/login`, {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                body: JSON.stringify({user: {username, password}}),
                Authorization: `Bearer ${token}`}
            })
            const result = await response.json();
            console.log(result)
            console.log(result.message);
            if (result.success) {
                setSuccessMessage(`User ${result.data.username} is ${result.message}`)
            } else {
                setSuccessMessage(result.message)
                console.log(`token: ${token}`);
            }
            console.log("result: ", result);
        } catch (error) {
            setError(error.message);
        }
    }

	return (
		<>
            <h2>Log in</h2>
            {successMessage && <p>{successMessage}</p>}
            {error && <p>{error}</p>}
			<form onSubmit={handleClick}>
                <label>
                    Username: <input value={username} onChange={(e) => setUsername(e.target.value)} />
                </label><br />
                <label>
                    Password: <input value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <br></br>
                <button>Submit</button>
            </form>
		</>
	);
}
