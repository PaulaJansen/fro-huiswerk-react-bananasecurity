import React, {useContext, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import InputField from "../components/inputField/InputField";
import axios from "axios";

function SignUp() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        async function createUser(email, password, username) {
            const response = await axios.post('https://novi-backend-api-wgsgz.ondigitalocean.app/api/users',
                {
                    email: email,
                    password: password,
                    username: username,
                },
                 {
                    'novi-education-project-id': 'dba8566a-9dd8-4a2a-b717-eaaae3e286b4'
                }
            );
        }

        console.log("Gebruiker is geregistreerd!");
        navigate("/signin/");
    }

    return (
        <>
            <h1>Registreren</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque consectetur, dolore eaque
                eligendi
                harum, numquam, placeat quisquam repellat rerum suscipit ullam vitae. A ab ad assumenda, consequuntur
                deserunt
                doloremque ea eveniet facere fuga illum in numquam quia reiciendis rem sequi tenetur veniam?</p>
            <form onSubmit={handleSubmit}>
                <InputField label="Emailadres"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                />
                <InputField label="Gebruikersnaam"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                />
                <InputField label="Wachtwoord"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">
                    Registreren
                </button>
            </form>
            <p>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>
        </>
    );
}

export default SignUp;