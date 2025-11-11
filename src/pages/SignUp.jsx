import React, {useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import InputField from "../components/inputField/InputField";
import {AuthContext} from "../contexts/AuthContext";

function SignUp() {

    const {signup} = useContext(AuthContext);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        signup(username, email);
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