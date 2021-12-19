import { AlertTitle, Button, CircularProgress, Container, TextField } from '@mui/material';
import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Register.css';

const Register = () => {
    const { user, registerUser, isLoading, authError } = useAuth();
    const [loginData, setLoginData] = useState();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your Password did not match!');
            return;
        }

        registerUser(loginData.email, loginData.password)
        e.preventDefault();
    }
    return (
        <div className='register-wrap d-flex justify-content-center align-items-center'>
            <Container className='register-form-wrap'>
                <h3>Register</h3>
                {
                    !isLoading &&
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '40%', m: 1 }}
                            id="standard-basic"
                            name="email"
                            type='email'
                            onChange={handleOnChange}
                            required
                            label="Your Email" variant="standard"
                        />
                        <br />
                        <TextField
                            sx={{ width: '40%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            required
                            name="password"
                            onChange={handleOnChange}
                            type="password"
                            variant="standard"
                        />
                        <br />
                        <TextField
                            sx={{ width: '40%', m: 1 }}
                            id="standard-basic"
                            label="Re-type Your Password"
                            required
                            name="password2"
                            onChange={handleOnChange}
                            type="password"
                            variant="standard"
                        />
                        <br />
                        <Button
                            sx={{ width: '40%', m: 1 }}
                            type='submit'
                            variant='contained'>Register
                        </Button>
                        <br />
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to='/login'
                        >
                            <Button variant='text'>
                                Already Registered? Please Login
                            </Button>
                        </NavLink>
                    </form>
                }
                {
                    isLoading && <CircularProgress />
                }
                {
                    user?.email && <Alert style={{color:'green'}} severity="success">Registration successful!</Alert>

                }
                {
                    authError && <Alert style={{color:'red'}} severity="error">{authError}</Alert>

                }
            </Container>
        </div>
    );
};

export default Register;