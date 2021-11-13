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
import { useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Signup from "../../../images/signup.svg";
import Header from "../../Shared/Header/Header";
const Registration = () => {
  const [loginData, setLoginData] = useState({});
  const { user, registerUser, authError, isLoading } = useAuth();
  const history = useHistory();
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    console.log(newLoginData);
    setLoginData(newLoginData);
  };
  const handleRegistration = (e) => {
    registerUser(
      loginData.email,
      loginData.password,
      loginData.name,
      loginData.image,
      history
    );
    e.preventDefault();
  };

  return (
    <Box>
      <Header></Header>
      {isLoading && <CircularProgress color='success' />}
      {user?.email && (
        <Alert severity='success'>User created successfully.</Alert>
      )}
      {authError && <Alert severity='error'>{authError}</Alert>}
      <Container className='d-flex justify-content-between align-items-center'>
        {!isLoading && (
          <Form onSubmit={handleRegistration}>
            <Form.Group className='mb-3' controlId='formBasicUserName'>
              <TextField
                className='w-100'
                id='outlined-email-input'
                label='Username'
                type='text'
                name='name'
                onBlur={handleOnBlur}
                color='error'
                autoComplete='current-email'
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <TextField
                className='w-100'
                id='outlined-email-input'
                label='Email'
                type='email'
                name='email'
                onBlur={handleOnBlur}
                color='error'
              />
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <TextField
                id='outlined-password-input'
                label='Password'
                type='password'
                name='password'
                onBlur={handleOnBlur}
                color='error'
              />
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBasicPassword2'>
              <TextField
                id='outlined-password-input'
                label='Retype-Password'
                name='password2'
                onBlur={handleOnBlur}
                type='password'
                color='error'
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicImage'>
              <TextField
                id='outlined-url-input'
                label='Image Url'
                name='image'
                onBlur={handleOnBlur}
                type='url'
                color='error'
              />
            </Form.Group>

            <Button variant='contained' type='submit' color='error'>
              Register
            </Button>
          </Form>
        )}

        <div className='my-5'>
          <img className='w-75' src={Signup} alt='' />
        </div>
      </Container>
    </Box>
  );
};

export default Registration;
