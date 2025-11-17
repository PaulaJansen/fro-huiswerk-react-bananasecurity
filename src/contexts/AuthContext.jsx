import {createContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {jwtDecode} from "jwt-decode";
import isTokenValid from "../helpers/isTokenValid";

export const AuthContext = createContext(null);

function AuthContextProvider({children}) {

    const [auth, setAuth] = useState({
        isAuth: false,
        user: null,
        status: 'pending',
    });

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const decodedToken = jwtDecode(token);
            if (isTokenValid(decodedToken)) {
                setAuth({
                    isAuth: true,
                    user:
                        {
                            email: decodedToken.email,
                            roles: decodedToken.role,
                        },
                    status: 'done',
                });
            } else {
                logout()
            }
        } else {
            setAuth({
                ...auth,
                status: 'done',
            });
        }
    }, []);

    function login(userDetails) {
        localStorage.setItem('token', userDetails.token);
        setAuth({
            isAuth: true,
            user:
                {
                    email: userDetails.user.email,
                    roles: userDetails.user.roles
                },
            status: 'done',
        });
        console.log("Gebruiker is ingelogd!");
        navigate("/profile/");
    }

    function logout() {
        localStorage.clear();
        setAuth({isAuth: false, user: null, status: 'done'});
        console.log("Gebruiker is uitgelogd!");
        navigate("/");
    }

    const contextData = {auth, login, logout};

    return (
        <AuthContext.Provider value={contextData}>
            {auth.status === 'done' ? children : <p>Loading...</p>}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;