import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";



const useAuth = () => {
    const alInfo = useContext(AuthContext);
    return alInfo;
    
};

export default useAuth;