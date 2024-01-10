import axios from "axios";
import useAuth from "./useAuth";
import { useEffect } from "react";

const instance = axios.create({
    baseURL : import.meta.env.VITE_SERVER_URL,  
    withCredentials : true,
})

const useAxios = () => {
    const {logout} = useAuth();
    
    useEffect(() => {
        instance.interceptors.response.use(response => {
            return response;
        },  error => {
            if( error.response.status === 401 || error.response.status === 403 ){
                
                logout()
                .then(res => res.json())
                .then(data=>{
                    console.log('Logout browser',data)
                });
            }
        })
    },[logout])
   
    return instance;
};

export default useAxios;