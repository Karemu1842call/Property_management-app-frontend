import React from "react";
import LoginForm from "./LoginForm";
import LoginPic from "../../components/images/Untitled design.png";
import Logo from "../../components/images/Homely.png"
// import {Container, Row, Col } from "react-bootstrap"
import "../Login/login.css";

function Login() {
  return (
    <>
      <div style={{height :"100px"}}className="container-fluid">
        <div className="row mh-100">
          <div className="col-sm-6 col-md-8">
            <img style={{maxWidth :"20%"}}src={Logo}className="p-2" alt="Homely logo"/>
            <div className="login-form d-flex justify-content-center align-items-center py-2">
              <LoginForm />
            </div>
          </div>
          <div className="col-md-4 col-sm-6 login-right">
            <img src={LoginPic} className="img-fluid LoginPic" alt="Login BG" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
