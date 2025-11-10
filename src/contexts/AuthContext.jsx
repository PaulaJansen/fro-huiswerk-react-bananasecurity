import {createContext, useState} from "react";
import {useNavigate} from "react-router-dom";

export const AuthContext = createContext(null);

function AuthContextProvider({children}) {
    const [isAuth, toggleIsAuth] = useState(false);
    const navigate = useNavigate();

    //laten staan voor evt debuggen
    function toggleAuth() {
        toggleIsAuth(prev => !prev);
    }

    const login = () => {
        toggleIsAuth(true);
        console.log("Gebruiker is ingelogd!");
        navigate("/profile");
    }

    const logout = () => {
        toggleIsAuth(false);
        console.log("Gebruiker is uitgelogd!");
        navigate("/");
    }

    return (
        <AuthContext.Provider value={{
            isAuth, toggleAuth, login, logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;