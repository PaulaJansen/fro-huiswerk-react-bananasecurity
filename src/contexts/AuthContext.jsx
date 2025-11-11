import {createContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

export const AuthContext = createContext(null);

function AuthContextProvider({children}) {

    const [authState, setAuthState] = useState({
        isAuth: false,
        user: {
            username: "",
            email: ""
        }
    });

    const navigate = useNavigate();

    //laten staan voor evt debuggen
    // function toggleAuth() {
    //     setAuthState((prev) => ({
    //         ...prev,
    //         isAuth: !prev.isAuth,
    //     }));
    // }

    const login = (username = "") => {
        setAuthState({isAuth: true, user: {username: username, email: ""}});
        console.log("Gebruiker is ingelogd!");
        navigate("/profile/");
    }

    const signup = (username = "", email = "") => {
        setAuthState({isAuth: true, user: {username: username, email: email}});
        console.log("Gebruiker is geregistreerd!");
        navigate("/profile/");
    }

    const logout = () => {
        setAuthState({isAuth: false, user: ""});
        console.log("Gebruiker is uitgelogd!");
        navigate("/");
    }

    return (
        <AuthContext.Provider value={{
            authState, login, logout, signup
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;