import { createContext, useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { app } from "../Firebase/Firebase.config";



export const AuthContext = createContext(null);


const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged (auth, currentUser => {
            setUser(currentUser);
            console.log('current user', currentUser);
            setLoading(false);
        })
        return()=>{
            return unsubscribe();
        }
    }, [])
    const authInfo = {
        user
    }

    return (
        <AuthProvider.Provider value={authInfo}>
            {children}
        </AuthProvider.Provider>
    );
};

export default AuthProvider;



