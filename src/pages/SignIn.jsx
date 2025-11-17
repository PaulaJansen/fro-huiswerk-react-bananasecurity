import React, {useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from '../contexts/authContext';
import InputField from "../components/inputField/InputField";
import axios from "axios";
import {toast} from "react-toastify";

function SignIn() {

    const {login} = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await axios.post('https://novi-backend-api-wgsgz.ondigitalocean.app/api/login',
                {
                    email: email,
                    password: password,
                },
                {
                    headers: {
                        'novi-education-project-id': 'dba8566a-9dd8-4a2a-b717-eaaae3e286b4'
                    }
                });

            login(response.data);
        } catch (e) {
            toast.error("Login mislukt, probeer opnieuw!");
        }
    }

    return (
        <>
            <h1>Inloggen</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id
                molestias qui quo unde?</p>

            <form onSubmit={handleSubmit}>
                <InputField label="E-mailadres"
                            id="emailfield"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                />
                <InputField label="Wachtwoord"
                            id="password-field"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">
                    Inloggen
                </button>
            </form>

            <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
        </>
    );
}

export default SignIn;