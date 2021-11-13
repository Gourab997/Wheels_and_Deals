import {
  Alert,
  Button,
  CircularProgress,
  Container,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";

import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Link, NavLink, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import login from "../../../images/login.svg";
import Header from "../../Shared/Header/Header";
const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, isLoading, authError } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLogin = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };
  return (
    <Box>
      <Header></Header>
      <Container className='d-flex justify-content-between align-items-center'>
        <div className='my-5'>
          <img className='w-75' src={login} alt='' />
        </div>

        <Form onSubmit={handleLogin}>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <TextField
              className='w-100'
              id='outlined-email-input'
              label='Email'
              type='email'
              name='email'
              onChange={handleOnChange}
              color='error'
              autoComplete='current-email'
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <TextField
              id='outlined-password-input'
              label='Password'
              type='password'
              color='error'
              name='password'
              onChange={handleOnChange}
              autoComplete='current-Password'
            />
          </Form.Group>
          <Button type='submit' variant='contained' color='error'>
            Login
          </Button>

          {isLoading && <CircularProgress className='mx-3' color='error' />}
          {user?.email && (
            <Alert className='my-3' severity='success'>
              Login successfully.
            </Alert>
          )}
          {authError && (
            <Alert className='my-3' severity='error'>
              {authError}
            </Alert>
          )}
        </Form>
      </Container>
      <h5>
        {" "}
        Don't have account.?{" "}
        <Link to='/register' style={{ textDecoration: "none", color: "red" }}>
          Sign Up
        </Link>{" "}
      </h5>
    </Box>
  );
};

export default Login;
