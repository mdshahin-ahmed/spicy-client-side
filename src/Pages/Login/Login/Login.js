import { Button, CircularProgress, Container, TextField } from '@mui/material';
import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css';

const Login = () => {

    const { user, loginUser, isLoading, authError, signInWithGoogle } = useAuth();

    const [loginData, setLoginData] = useState();

    const location = useLocation();
    const navigate = useNavigate();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, navigate);
        e.preventDefault();
    }

    const handleGoogleSignIn = ()=>{
        signInWithGoogle(location, navigate)
    }

    return (
        <div className='login-wrap d-flex justify-content-center align-items-center'>
            <Container className='login-form-wrap'>
                <h3>Login</h3>
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
                        <Button
                            sx={{ width: '40%', m: 1 }}
                            type='submit'
                            variant='contained'>Login
                        </Button>
                        <br />
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to='/register'
                        >
                            <Button variant='text'>
                                New User? Please Register
                            </Button>
                        </NavLink>
                    </form>                    
                }
                
                {
                    !isLoading && <Button onClick={handleGoogleSignIn} variant='contained'>Google Sign In</Button>
                }

                {
                    isLoading && <CircularProgress />
                }
                {
                    user?.email && <Alert style={{color:'green'}} severity="success">Login successful!</Alert>

                }
                {
                    authError && <Alert style={{color:'red'}} severity="error">{authError}</Alert>

                }
            </Container>
        </div>
    );
};

export default Login;