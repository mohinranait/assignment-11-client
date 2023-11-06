import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import PropTypes from "prop-types"
import LoadingSpin from "../components/LoadingSpin";


const PrivateRoutes = ({children}) => {
    const {user, isLoading} = useAuth();
    const location = useLocation();

    if( isLoading ){
        return <LoadingSpin />
    }

    if(user?.email){
        return children
    }

    return <Navigate to={'/login'} state={location.pathname} replace />
};

PrivateRoutes.propTypes = {
    children : PropTypes.node,
}

export default PrivateRoutes;