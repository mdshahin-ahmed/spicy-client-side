import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../image/logo.png'

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar expand="lg" style={{ background: 'rgb(187, 189, 190)' }}>
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img style={{ width: "60px", height: "60px", borderRadius: '501%' }} src={logo} alt="" />
                        <text className="text-dark fw-bold ms-3">Spicy</text>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" style={{ outline: '0px', color: 'transparent' }} />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="m-auto">
                            <Nav.Link as={Link} className='text-dark' style={{ fontSize: '20px' }} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} className='text-dark' style={{ fontSize: '20px' }} to="/menus">Menus</Nav.Link>
                            {
                                user.email && <Nav.Link as={Link} className='text-dark' style={{ fontSize: '20px' }} to="/dashboard">Dashboard</Nav.Link>

                            }
                        </Nav>
                        <Nav>

                            {
                                user?.email && <span style={{ color: '', marginRight: '10px', alignSelf: 'center' }}>Welcome! {user.displayName}</span>
                            }
                            {
                                user?.email ?
                                    <Button onClick={logOut}>Log Out</Button>
                                    :
                                    <Nav.Link as={NavLink} to="/login">
                                        <Button>Login</Button>
                                    </Nav.Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};

export default Header;