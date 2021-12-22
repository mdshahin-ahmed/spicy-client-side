import { Button, CircularProgress, Container, TextField } from '@mui/material';
import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css';
import google from '../../../../src/image/google.png';

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
                        <TextField style={{borderRadius:'5px'}}
                            sx={{ width: '40%', m: 1, background:'white' }}
                            id="standard-basic"
                            name="email"
                            type='email'
                            onChange={handleOnChange}
                            required
                            label=". Your Email" variant="standard"
                        />
                        <br />
                        <TextField style={{borderRadius:'5px'}}
                            sx={{ width: '40%', m: 1, background:'white' }}
                            id="standard-basic"
                            label=". Your Password"
                            required
                            name="password"
                            onChange={handleOnChange}
                            type="password"
                            variant="standard"
                        />
                        <br />
                        <Button className="login_button"
                            sx={{ width: '40%', m: 1 }}
                            type='submit'
                            variant='contained'>Login
                        </Button>
                        <br />
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to='/register'
                        >
                            <Button variant='text' className='register_link mb-4 mt-3'>
                                New User? Please Register
                            </Button>
                        </NavLink>
                    </form>                    
                }
                
                {
                    !isLoading && <Button className='google_login' onClick={handleGoogleSignIn} variant='contained'> <img style={{height:"25px", marginRight:'5px'}} src={google} alt="" /> Google Sign In</Button>
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