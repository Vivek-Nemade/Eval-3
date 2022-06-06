import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
// import Login from "../../pages/Login";

// use react-router Link or NavLink
// const Link = <a />;

const Navbar = () => {
  const { isAuth, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleclick = () => {
    if (isAuth) {
      logout();
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  return (
    <div data-cy="navbar" style={{ display: "flex", gap: "50px" }}>
      <Link data-cy="navbar-home-link" to="/">
        Logo
      </Link>
      <Link to="/Products">Products</Link>
      <span data-cy="navbar-cart-items-count">count: 0</span>
      <button data-cy="navbar-login-logout-button" onClick={handleclick}>
        {isAuth ? "Logout" : "login"}
      </button>
    </div>
  );
};

export default Navbar;
