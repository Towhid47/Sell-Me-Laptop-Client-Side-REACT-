import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.init.js";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [load, setLoad] = useState(true);

  // signUp by Email & Password
  const signUp = (email, password) => {
    setLoad(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //////// Update User Profile
  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  //////// User SignIn
  const signIn = (email, password) => {
    setLoad(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //////// Google Sign Up ///////////////
  const googleSignUp = (provider) => {
    setLoad(true);
    return signInWithPopup(auth, provider);
  };

  ///////////// Sign Out //////////////
  const sign_Out = () => {
    setLoad(true);
    return signOut(auth);
  };

  ////// Check whether User is Logged in or not
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoad(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authDataInfo = {
    signUp,
    user,
    setUser,
    load,
    updateUserProfile,
    signIn,
    googleSignUp,
    sign_Out,
  };

  return (
    <AuthContext.Provider value={authDataInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
