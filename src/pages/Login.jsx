import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setpass] = useState("");
  const [state, dispatch] = useContext(AuthContext);

  const handlesubmit = (e) => {
    axios({
      url: "https://reqres.in/api/login",
      method: "POST",
      headers: { "content-type": "application/json" },
      data: {
        email,
        password,
      },
    })
      .then((res) => {
        alert("success");
        dispatch({
          type: "SUCCESS",
          token: res.token.token,
        });
      })
      .catch((err) => {
        alert(err);
      });
  };
  if (state.isAuth) {
    return <Navigate to="/Products" />;
  }

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input
          data-cy="login-email"
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          data-cy="login-password"
          type="password"
          value={password}
          onChange={(e) => setpass(e.target.value)}
        />
        <button data-cy="login-submit" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
