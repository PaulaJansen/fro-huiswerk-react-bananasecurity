import React, {useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from '../contexts/authContext';
import InputField from "../components/inputField/InputField";

function SignIn() {

    const {login} = useContext(AuthContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        login(username);
    }

    return (
        <>
            <h1>Inloggen</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id
                molestias qui quo unde?</p>

            <form onSubmit={handleSubmit}>
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
                    Inloggen
                </button>
            </form>

            <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
        </>
    );
}

export default SignIn;