import { Button, Container, TextField } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Login.css';

const Login = () => {

    const [loginData, setLoginData] = useState()

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        e.preventDefault();
    }

    return (
        <div className='login-wrap d-flex justify-content-center align-items-center'>
            <Container className='login-form-wrap'>
                <h3>Login</h3>
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
            </Container>
        </div>
    );
};

export default Login;