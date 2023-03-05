import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import './Login.css'

const LoginForm = () => {
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        navigate("/dashboard");
    };
  return (
    <Form onSubmit={onSubmit} className="login-form">
      <h1 className="login-heading">Sign In</h1>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="example@email.com" />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="at least 4 characters strong" />
      </Form.Group>

      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember Me?" />
      </Form.Group>

      <Button variant="primary" type="submit" className="btn-block px-5">
        Login
      </Button>

      <p className="forgot-password">
        Forgot <a href="/">password?</a>
      </p>

      <p className="register-link">
        Don’t have an account? <a href="/register">Register now</a>
      </p>
    </Form>
  )
}

export default LoginForm