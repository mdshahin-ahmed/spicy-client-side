import { Button, CircularProgress, Container, TextField } from "@mui/material";
import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Login.css";
import google from "../../../../src/image/google.png";
import PasswordResetModal from "./PasswordResetModal/PasswordResetModal";

const Login = () => {
  const {
    user,
    loginUser,
    isLoading,
    authError,
    signInWithGoogle,
    resetPassword,
  } = useAuth();

  const [loginData, setLoginData] = useState();

  const location = useLocation();
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, navigate);
    e.preventDefault();
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle(location, navigate);
  };

  const handleResetPassword = (e) => {
    resetPassword(loginData.email);
    if (!loginData.email) {
      alert("Please Enter Your Email");
      return;
    }
    handleShow();
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="login-wrap d-flex justify-content-center align-items-center">
      <Container className="login-form-wrap">
        <h3>Login</h3>
        {!isLoading && (
          <form onSubmit={handleLoginSubmit}>
            <TextField
              style={{ borderRadius: "5px" }}
              sx={{ width: "40%", m: 1, background: "white" }}
              id="standard-basic"
              name="email"
              type="email"
              onChange={handleOnChange}
              required
              label=". Your Email (admin@admin.com)"
              variant="standard"
            />
            <br />
            <TextField
              style={{ borderRadius: "5px" }}
              sx={{ width: "40%", m: 1, background: "white" }}
              id="standard-basic"
              label=". Your Password (123456)"
              required
              name="password"
              onChange={handleOnChange}
              type="password"
              variant="standard"
            />
            <br />
            <Button
              className="login_button"
              sx={{ width: "40%", m: 1 }}
              type="submit"
              variant="contained"
            >
              Login
            </Button>
            <br />
            <NavLink style={{ textDecoration: "none" }} to="/register">
              <Button variant="text" className="register_link mb-1 mt-3">
                New User? Please Register
              </Button>
              <br />
            </NavLink>
            <Button
              onClick={handleResetPassword}
              variant="text"
              className="passwordResetLink mb-2"
            >
              Forgot Password?
            </Button>
          </form>
        )}

        {!isLoading && (
          <Button
            className="google_login"
            onClick={handleGoogleSignIn}
            variant="contained"
            style={{ marginBottom: "20px" }}
          >
            {" "}
            <img
              style={{ height: "25px", marginRight: "5px" }}
              src={google}
              alt=""
            />{" "}
            Google Sign In
          </Button>
        )}

        {isLoading && <CircularProgress />}
        {user?.email && (
          <Alert style={{ color: "green" }} severity="success">
            Login successful!
          </Alert>
        )}
        <div style={{ width: "50%", margin: "0 auto" }}>
          {authError && (
            <Alert style={{ color: "red" }} severity="error">
              {authError}
            </Alert>
          )}
        </div>
      </Container>
      <PasswordResetModal
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
      ></PasswordResetModal>
    </div>
  );
};

export default Login;
