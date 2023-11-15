import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase/FirebaseConfig";
import { useGlobalContext } from "./useGlobalContext";
import { useNavigate } from "react-router-dom";

export function useSignup() {
  const [error, setError] = useState(null);
  const {dispatch} = useGlobalContext()
  const navigate = useNavigate()

  const signup = (displayName, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then(async(user) => {
        await updateProfile(auth.currentUser, {
            displayName,
        })
        dispatch({type: "LOGIN", payload: user.user})
        navigate('/')
    })
    .catch((error) => {
        setError(error, error);
    })
  };

  return signup;
}
