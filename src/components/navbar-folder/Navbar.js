import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const NavBar = (props) => {
  return (
    <>
      <header className="navbar">
        <div className="container">
          <p className="app-title">Social API</p>
          {props.isLoginActive && (
            <ul className="sing-data">
              <li className="list">
                <NavLink className="login" to="/login">Login</NavLink>
              </li>
              <li className="list">
                <NavLink className="sing" to="/SingIn">Sign In</NavLink>
              </li>
            </ul>
          )}
        </div>
      </header>
    </>
  );
};

export default NavBar;
