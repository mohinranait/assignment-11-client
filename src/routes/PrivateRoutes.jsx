import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import PropTypes from "prop-types"


const PrivateRoutes = ({children}) => {
    const {user, isLoading} = useAuth();
    const location = useLocation();

    if( isLoading ){
        return <div>
            <p className="text-3xl font-bold text-center py-20 text-red-500">Loading...</p>
        </div>
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