import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/FirebaseConfig";
import { useState } from "react";
import { useGlobalContext } from "./useGlobalContext";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const [error, setError] = useState();
  const { dispatch } = useGlobalContext();
  const navigate = useNavigate();

  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        dispatch({ type: "LOGIN", payload: user.user });
        navigate('/');
      })
      .catch((error) => {
        setError(error);
      });
  };

  return { login, error };
}
