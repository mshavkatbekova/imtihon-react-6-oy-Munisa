import { useReducer, createContext, useEffect } from "react";
import { auth } from "../firebase/FirebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

export const GlobalContext = createContext();

const changeState = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
    case "AUTH_CHANGE":
      return { ...state, onAuthChange: true };
    case "ADD_LIKED_IMAGE":
      return { ...state, likedImages: [...state.likedImages, action.payload] };
    case "CHANGE_MODE":
      localStorage.setItem("mode", !state.mode)
      return { ...state, mode: !state.mode };
  }
};

function ChangeMode() {
  dispatch({type: "CHANGE_MODE"})
}
export function GlobalContextProvider({ children }) {
  const [state, dispatch] = useReducer(changeState, {
    user: null,
    onAuthChange: false,
  });

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch({ type: "LOGIN", payload: user });
      dispatch({ type: "AUTH_CHANGE", payload: true });
    });
  }, [state.user]);
  return (
    <GlobalContext.Provider value={{ ...state, dispatch, ChangeMode }}>
      {children}
    </GlobalContext.Provider>
  );
}
