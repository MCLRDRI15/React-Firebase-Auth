import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { NavLink } from "react-router-dom";
import humaaans from "../images/TechLife-Communication.png";

const Sing = () => {
  const {signup} = useAuth();
  const [error, setError] = useState("");
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleConfirmPassword = (e) => setConfirmPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setTimeout(() => setError(""), 1500);
    } else {
      try {
        await signup(email, password);
        history.push("/");
      } catch (error) {
        setError("Wrong Credentials");
        setTimeout(() => setError(""), 1500);
      }
    }
  };

  return (
    <div className="external">
      <div className="login-component">
        <div className="welcome">
          <span className="welcome-text">Welcome to Social API</span>
          <p className="message">"The best dreams happen when you’re awake"</p>
          <img src={humaaans} alt="humaaans" className="humaaans"></img>
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
          <span className="get-start">Get Started</span>
          <p className="account">
            Already have account ?{" "}
            <NavLink className="login" to="/login">
              Login
            </NavLink>
          </p>
          {error && <p className="error">{error}</p>}
          <span className="user-email">Email: </span>
          <br />
          <input
            type="email"
            placeholder="Your Email"
            className="input-data"
            onChange={handleEmail}
          />
          <br />
          <span className="user-password">Password: </span>
          <br />
          <input
            type="password"
            placeholder="Your password"
            className="input-data"
            onChange={handlePassword}
          />
          <br />
          <input
            type="password"
            placeholder="Confirm Password"
            className="input-data"
            onChange={handleConfirmPassword}
          />
          <br />
          <button className="login-button">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Sing;
