import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/navbar-folder/Navbar";
import Login from "./components/login-folder/Login";
import Sing from "./components/Sing-folder/Sing";
import Profile from "./components/profile-folder/Profile";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./context/AuthContext";
import { PrivateRoute } from "./components/private-route/PrivateRoute";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <div>
        <AuthProvider>
          <Switch>
            <Route path="/SingIn">
              <NavBar isLoginActive={true} />
              <Sing isActive={false} />
            </Route>
            <Route path="/Login">
              <NavBar isLoginActive={true} />
              <Login isActive={false} />
            </Route>
            <PrivateRoute exact path="/">
              <Profile />
            </PrivateRoute>
          </Switch>
        </AuthProvider>
        <ToastContainer/>
      </div>
    </Router>
  );
}

export default App;
