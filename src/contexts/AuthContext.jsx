import {createContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {jwtDecode} from "jwt-decode";
import isTokenValid from "../helpers/isTokenValid";
import axios from "axios";
import emailToName from "../helpers/emailToName";

export const AuthContext = createContext({});

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
                void fetchUserInformation(decodedToken.userId, token);
            } else {
                logout();
            }
        } else {
            logout();
        }
    }, []);

    function login(userDetails) {

        localStorage.setItem("token", userDetails.token);

        try {
            const decodedToken = jwtDecode(userDetails.token);
            void fetchUserInformation(decodedToken.userId, userDetails.token, '/profile');
            console.log("Gebruiker is ingelogd!");
        } catch (e) {
            console.error("Token ongeldig!");
        }
    }

    function logout() {
        localStorage.clear();
        setAuth({
            isAuth: false,
            user: null,
            status: 'done'
        });
        console.log("Gebruiker is uitgelogd!");
        navigate("/");
    }

    async function fetchUserInformation(userId, token, redirectUrl) {
        try {
            const decodedToken = jwtDecode(token);
            const response = await axios.get(`https://novi-backend-api-wgsgz.ondigitalocean.app/api/users/${userId}`,
                {
                    headers: {
                        'novi-education-project-id': 'dba8566a-9dd8-4a2a-b717-eaaae3e286b4',
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    }
                })

            setAuth({
                isAuth: true,
                user: {
                    email: response.data.email,
                    id: response.data.id,
                    role: decodedToken.role,
                },
                status: 'done',
            });

            if (redirectUrl) {
                navigate(redirectUrl);
            }

        } catch (e) {
            console.error(e);
            setAuth({
                isAuth: false,
                user: null,
                status: 'done',
            });
        }
    }

    const contextData = {auth, login, logout};

    return (
        <AuthContext.Provider value={contextData}>
            {auth.status === 'done' ? children : <p>Loading...</p>}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;