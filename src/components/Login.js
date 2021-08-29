import React, { useState, useEffect } from "react";
import AuthService from "../services/auth.service";
import { withRouter } from "react-router-dom";
import "./style.css";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const processUser = () => {
    const parameters = window.location.search.substring(1).split("&");
    console.log(parameters);

    if (parameters.length == 1) {
      console.log(true);
      return;
    } else {
      const temp1 = parameters[0].split("=");
      const l = unescape(temp1[1]);
      var temp2 = parameters[1].split("=");
      const p = unescape(temp2[1]);

      console.log(l + p);

      autoLogin(l, p);
    }
  };

  useEffect(() => {
    processUser();
  }, []);

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const autoLogin = (username, password) => {
    AuthService.login(username, password).then(
      () => {
        props.history.push("/profile");
        window.location.reload();
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const handleLogin = (e) => {
    e.preventDefault();

    AuthService.login(username, password).then(
      () => {
        props.history.push("/profile");
        window.location.reload();
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <div className="form-cn">
      <div className="form card">
        <form className="container" onSubmit={handleLogin}>
          <h3>Login</h3>
          <div>
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={onChangeUsername}
            />
          </div>

          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={onChangePassword}
            />
          </div>

          <div>
            <button>
              <span>Login</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default withRouter(Login);
