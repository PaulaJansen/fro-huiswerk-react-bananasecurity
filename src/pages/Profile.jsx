import React, {useContext, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from "../contexts/AuthContext";
import axios from "axios";
import {jwtDecode} from "jwt-decode";
import emailToName from "../helpers/emailToName";

function Profile() {

    const {auth} = useContext(AuthContext);
    const [profileInfo, setProfileInfo] = useState('');

    useEffect(() => {

        async function fetchProfileInformation() {
            const token = localStorage.getItem('token');

            try {
                const response = await axios.get('http://localhost:3000/660/private-content',
                    {
                        headers:
                            {
                                'Content-Type': "application/json",
                                Authorization: `Bearer ${token}`,
                            }
                    });

                console.log(response.data);
                setProfileInfo(response.data);
            } catch (e) {
                console.error("Fetch failed");
            }
        }

        void fetchProfileInformation();
    }, []);

    return (
        <>
            <h1>Profielpagina</h1>
            <section>
                <h2>Gegevens</h2>
                <p><strong>Gebruikersnaam:</strong> {emailToName(auth.user.email)}</p>
                <p><strong>Email:</strong> {auth.user.email}</p>
            </section>
            <section>
                <h2>Strikt geheime profiel-content</h2>
                <h3>{profileInfo.title}</h3>
                <p>{profileInfo.content}</p>
            </section>
            <p>Terug naar de <Link to="/">Homepagina</Link></p>
        </>
    );
}

export default Profile;