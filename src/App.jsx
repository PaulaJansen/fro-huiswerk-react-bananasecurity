import React, {useContext} from 'react';
import {Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Profile from './pages/Profile';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import './App.css';
import ProtectedRoute from "./components/ProtectedRoute";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {AuthContext} from "./contexts/AuthContext";

function App() {
    return (
        <>
            <NavBar/>
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route
                        path="/profile/"
                        element={
                            <ProtectedRoute>
                                <Profile/>
                            </ProtectedRoute>
                        }
                    />
                    <Route path="/signin" element={<SignIn/>}/>
                    <Route path="/signup" element={<SignUp/>}/>
                </Routes>
            </div>
            <ToastContainer/>
        </>
    );
}

export default App;
