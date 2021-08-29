import React ,{useEffect,useState}from "react";
import AuthService from "../services/auth.service";
import {withRouter } from 'react-router-dom'
import "./style.css";

const Profile = (props) => {
  const [idcard, setIdCard] = useState("");
  const [f_name, setFirstName] = useState("");
  const [l_name, setLastName] = useState("");

  const getUser = () => {
    return AuthService.getCurrentUser();
  }

  useEffect(() => {
    const currentUser = getUser()

    if(!currentUser){
        props.history.push("/login");
    }else{
        setIdCard(currentUser.user_idcard)
        setFirstName(currentUser.user_first_name_th)
        setLastName(currentUser.user_last_name_th)
    }

  }, []);

  return (
    <div className="card">
        <div className="container">
        <h3>
          <strong> profile </strong>
        </h3>
      {/* <p>
        <strong>Token:</strong> {getUser.accessToken.substring(0, 20)} ...{" "}
        {getUser.accessToken.substr(getUser.accessToken.length - 20)}
      </p> */}
    <p><strong>id Card: </strong>{idcard}</p>
      <p>
        <strong>name:</strong> {f_name} {l_name}
      </p>

      {/* <strong>Authorities:</strong> */}
      {/* <ul>
        {currentUser.roles &&
          currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
      </ul> */}
        </div>
      
       
    </div>
  );
};

export default withRouter( Profile); 