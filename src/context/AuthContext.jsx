import React, { createContext, useReducer, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // const [isAuth, setIsauth] = useState(false);
  // const {state}=useLocation()

  // const navigate = useNavigate();

  // const login = () => {
  //   setIsauth(true);
  //   navigate("/login");
  // };

  // const logout = () => {
  //   setIsauth(false);
  //   navigate("/");
  // };

  const initstate = {
    isAuth: false,
    token: null,
  };

  function reducer(state, action) {
    switch (action.type) {
      case "SUCCESS": {
        return {
          ...state,
          isAuth: true,
          token: action.token,
        };
      }
      case "Logout_SUCCESS": {
        return {
          ...state,
          isAuth: false,
          token: null,
        };
      }
      case "UNSUCCESS": {
        return {
          ...state,
          isAuth: false,
          token: null,
        };
      }
      default: {
        return state;
      }
    }
  }

  const [state, dispatch] = useReducer(reducer, initstate);

  return (
    <AuthContext.Provider value={[state, dispatch]}>
      {children}
    </AuthContext.Provider>
  );
};
