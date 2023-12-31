import { createUserWithEmailAndPassword, signInWithEmailAndPassword,GoogleAuthProvider, signInWithPopup, updateProfile, signOut, onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../services/firebase";
import PropTypes from "prop-types"
import useAxios from "../hooks/useAxios";
const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext({});

const AuthProvider = ({children}) => {
    const axios  = useAxios();
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // Create user
    const createUser = (email, password) => {
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Update Profile
    const updateUser = (name, photo) => {
        setIsLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name, 
            photoURL: photo
        })
    }

    // Login user
    const login = (email, password) => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Google Login
    const googleLogin = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    // logout
    const logout = () => {
        setIsLoading(true);
        return signOut(auth)
    }


    useEffect(() => {
        const onSubscribe = onAuthStateChanged(auth,  currentUser => {
            const email = currentUser?.email 
            setUser(currentUser);
            setIsLoading(false);
            if(email){
                axios.post(`/jwt`, {email})
                .then(res => {
                    console.log(res.data);
                });
            }else{
                axios.post("/logout", {email})
                .then(res => {
                    console.log(res.data);
                });
                console.log("user ni");
            }
        });

        return () => {
            onSubscribe();
        }
    },[user])

    const userInfo = {
        user,
        isLoading,
        login,
        createUser,
        googleLogin,
        updateUser,
        logout,
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children : PropTypes.node
}

export default AuthProvider;