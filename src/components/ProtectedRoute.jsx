import {useContext} from "react";
import {AuthContext} from '../contexts/AuthContext';
import {Navigate} from "react-router-dom";

function ProtectedRoute({children}) {

    const {isAuth} = useContext(AuthContext);

    if (!isAuth) {
        return <Navigate to="/" />;
    }

    return children;
}

export default ProtectedRoute;