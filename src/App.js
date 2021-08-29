import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";

import './App.css';

import AuthService from "./services/auth.service";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  const [showAdmin, setShowAdmin] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowAdmin(user.role_name.includes("ROLE_Administrator"));
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };

  return (
      <div>
        <div>
        {/* <ul>
          <li>
            <Link to="/form-1">Form 1</Link>
          </li>
          <li>
            <Link to="/form-2">Form 2</Link>
          </li>
        </ul> */}

        {/* {showAdmin && (
          <ul> 
            <li >
              <Link to={"/admin"} >
                Admin
              </Link>
            </li>
          </ul>
        )} */}
      </div>

      {currentUser ? (
          <div >
            <ul>
            <li>
              <Link to={"/profile"}>
                {currentUser.user_idcard}
              </Link>
            </li>
            <li>
              <a href="/login" onClick={logOut}>
                LogOut
              </a>
            </li>

            </ul>
          
          </div>
        ) : (
          <div>
            <ul>
            <li>
              <Link to={"/login"}>
                Login
              </Link>
            </li>
            </ul>
          </div>
        )}
      
        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </div>
  );
}

export default App;
