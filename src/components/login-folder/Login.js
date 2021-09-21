import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import humaaans from "../images/TechLife-RemoteLife.png";
import "./Login.css";

const Login = (props) => {

  const  {login}  = useAuth();
  const [error, setError] = useState('');
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = e => setEmail(e.target.value);
  const handlePassword = e => setPassword(e.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await login(email, password);
      history.push('/');
    } catch (error) {
      setError('Wrong Credentials');
      setTimeout(() => setError(''), 1500);
    }
  }

  return (
    <div className="external">
      <div className="login-component">
        <div className="welcome">
          <span className="welcome-text">Welcome to Social API</span>
          <p className="message">
            "Believe and act as if it were impossible to fail"
          </p>
          <img src={humaaans} alt="humaaans" className="humaaans"></img>
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
          <span className="get-start">Get Started</span>
          <p className="account">
            Already have account ?
            <NavLink className="sing" to="/SingIn">
              Sign In
            </NavLink>
          </p>
          {error && <p className='error' >{error}</p>}
          <span className="user-email">Email: </span>
          <br />
          <input
            type="email"
            placeholder="Your Email"
            className="input-data"
            autoFocus
            required
            onChange={handleEmail}
          />
          <br/>
          <span className="user-password">Password: </span>
          <br />
          <input
            type="password"
            placeholder="Your password"
            className="input-data"
            required
            onChange={handlePassword}
          />
          <br />
          <button className="login-button">
            Sing Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
