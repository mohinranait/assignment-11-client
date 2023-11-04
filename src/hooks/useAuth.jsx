import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const useAuth = ({children}) => {
    const {user, isLoading} = useContext(AuthContext);
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

export default useAuth;