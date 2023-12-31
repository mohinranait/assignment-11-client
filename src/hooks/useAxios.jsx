import axios from "axios";
import useAuth from "./useAuth";
import { useEffect } from "react";

const instance = axios.create({
    baseURL : "http://localhost:5000/api/v1",
    // baseURL : "https://assignment-11-server-seven-amber.vercel.app/api/v1",
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