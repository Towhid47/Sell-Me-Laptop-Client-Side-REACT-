import { createContext, useEffect, useState } from "react"
import app from '../firebase/firebase.init.js';
import {createUserWithEmailAndPassword,getAuth, onAuthStateChanged, updateProfile} from 'firebase/auth';



export  const AuthContext = createContext();

        const auth = getAuth(app);



const AuthProvider = ({children}) =>{

    const [user, setUser] = useState(null);

    const [load, setLoad] = useState(true);


    // signUp by Email & Password
    const signUp = (email,password) =>{
        setLoad(true);
        return createUserWithEmailAndPassword(auth, email , password)
    }


    //////// Update User Profile
    const updateUserProfile = (profile) =>{
        return updateProfile(auth.currentUser,profile)
    }



    ////// Check whether User is Logged in or not
    useEffect(()=>{

        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
             setUser(currentUser);
             setLoad(false);
         })
  
         return ()=>{
              unsubscribe();   
           }
     },[])



    const authDataInfo ={
        signUp,
        user,
        setUser,
        load,
        updateUserProfile
    }


    return (
        <AuthContext.Provider value={authDataInfo}>
            {children}
        </AuthContext.Provider>
    )

};

export default AuthProvider;