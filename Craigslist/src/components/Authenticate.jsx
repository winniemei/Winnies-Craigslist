import { useState } from "react";
const COHORT_NAME = '2306-ghp-et-web-ft-sf'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

export default function Authenticate({ token, setToken }) {
    const [successMessage, setSuccessMessage] = useState(null);
    const [error, setError] = useState(null);

    async function handleClick() {
        try {
            const response = await fetch(`${BASE_URL}/users/login`, {
                method: "GET",
                headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`},
            })
            const result = await response.json();
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
            <h2>Authenticate</h2>
            {successMessage && <p>{successMessage}</p>}
            {error && <p>{error}</p>}
			<button onClick={handleClick}>Authenticate Token</button>
		</>
	);
}
