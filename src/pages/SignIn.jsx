import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from '../contexts/authContext';
import InputField from "../components/inputField/InputField";

function SignIn() {

    const {login} = useContext(AuthContext);

    return (
        <>
            <h1>Inloggen</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id
                molestias qui quo unde?</p>

            <form onSubmit={login}>
                <InputField label="Gebruikersnaam" name="username"/>
                <InputField label="Wachtwoord" name="password"/>
                <button type="submit">
                    Inloggen
                </button>
            </form>

            <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
        </>
    );
}

export default SignIn;