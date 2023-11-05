import axios from "axios";
import useAuth from "./useAuth";
import { useEffect } from "react";

const instance = axios.create({
    baseURL : "http://localhost:5000/api/v1",
    withCredentials : true,
})

const useAxios = () => {
    const {logout} = useAuth();
    

    useEffect(() => {
        instance.interceptors.response.use(response => {
            return response;
        }, async error => {
            console.log(error);
            if( error.response.status === 401 || error.response.status === 403 ){
                // Logout
                await logout()
            }
        })
    },[logout])
   
    return instance;
};

export default useAxios;