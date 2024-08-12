import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';


const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <span className="loading text-center items-center justify-center loading-spinner loading-lg"></span>
    }
    if (user) {
        return children
    }
    else {
        return <Navigate to='/login'></Navigate>
    }

};

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.node
}