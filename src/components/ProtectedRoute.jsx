import {useContext} from "react";
import {AuthContext} from '../contexts/AuthContext';
import {Navigate} from "react-router-dom";

function ProtectedRoute({children}) {

    const {auth} = useContext(AuthContext);

    if (!auth.isAuth) {
        return <Navigate to="/" />;
    }

    return children;
}

export default ProtectedRoute;