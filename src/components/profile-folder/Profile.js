import React, {useState} from "react";
import { useHistory } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext';
import Task from "../Task-crud-folder/Task";
import "./Profile.css";

const Profile = () => {

  const { logout } = useAuth();
  const history = useHistory();

  const [error, setError] = useState('');

  const handleLogout = async () => {
    try {
      await logout();
      history.push('/login');
    } catch (error) {
      setError('Server Error')
    }
  }

  return (
    <>
      <div className="external">
        <header className="navbar">
          <div className="container">
            <p className="app-title">Your pending tasks</p>
            <button className="logout-button" onClick={handleLogout}>Logout</button>
          </div>
          {error && <p className='error' >{error}</p>}
        </header>
        <Task/>
      </div>
    </>
  );
};

export default Profile;
