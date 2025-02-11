import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.init";
import axios from "axios";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [id, setId] = useState(null);

    // Create new user, login, log out, google sign in, update profile
    const createNewUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }

    // const googleProvider = new GoogleAuthProvider();
    // googleProvider.setCustomParameters({
    //     prompt: "select_account",
    // });
    // const handleGoogleSignIn = () => {
    //     return signInWithPopup(auth, googleProvider);
    // }

    const updateUserProfiles = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData);
    }

    // Auth
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, async (currentUser) => {
            setLoading(true); // Ensure loading state is set at the start
            try {
                if (currentUser?.email) {
                    const user = { email: currentUser.email };

                    // Request JWT token from the backend
                    const res = await axios.post('https://mw-assignments11-server.vercel.app/jwt', user, {
                        withCredentials: true,
                    });

                    // Successfully set the user
                    setUser(currentUser);
                } else {
                    // Logout case: clear token and user state
                    await axios.post('https://mw-assignments11-server.vercel.app/logout', {}, {
                        withCredentials: true,
                    });
                    setUser(null);
                }
            } catch (error) {
                console.error("Error during authentication state change:", error);
            } finally {
                setLoading(false); // End loading state regardless of success or failure
            }
        });

        // Cleanup subscription on unmount
        return () => unSubscribe();
    }, []);


    
    // useEffect(() => {
    //     const unSubscribe = onAuthStateChanged(auth, currentUser => {
    //         setUser(currentUser);
            
    //         // console.log('state captures', currentUser?.email)

    //         if (currentUser?.email) {
    //             const user = { email: currentUser.email };

    //             axios.post('https://mw-assignments11-server.vercel.app/jwt', user, {
    //                 withCredentials: true
    //             })
    //                 .then(res => {
    //                     // console.log('login token', res.data);
    //                     setLoading(false);
    //                 })
    //         }
    //         else {
    //             axios.post('https://mw-assignments11-server.vercel.app/logout', {}, {
    //                 withCredentials: true
    //             })
    //                 .then(res => {
    //                     // console.log('logout', res.data);
    //                     setLoading(false);
    //                 })
    //         }
    //     })

    //     return () => {
    //         unSubscribe();
    //     }
    // }, [])

    const authInfo = {
        user,
        setUser,
        createNewUser,
        logOut,
        userLogin,
        loading,
        updateUserProfiles,
        setId,
        id,
        handleGoogleSignIn,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;