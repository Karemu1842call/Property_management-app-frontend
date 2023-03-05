import React from 'react'
import LoginForm from './LoginForm'
import Logo from '../../images/Homely.png'
import './Login.css'

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-form-container">
        <img src={Logo} alt="Logo" className="logo" />
        <LoginForm />
      </div>
    </div>
  )
}

export default Login