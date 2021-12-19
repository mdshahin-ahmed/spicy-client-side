import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} className='text-dark' style={{ fontSize: '20px' }} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} className='text-dark' style={{ fontSize: '20px' }} to="/menus">Menus</Nav.Link>
                        </Nav>
                        <Nav>

                            {
                                user?.email
                                    ?
                                    <Nav.Link as={Link} className='text-dark' style={{ fontSize: '20px' }} to="/login">
                                        <button className="btn btn-primary" onClick={logOut}>Logout</button>
                                    </Nav.Link>
                                    :
                                    <Nav.Link as={Link} className='text-dark' style={{ fontSize: '20px' }} to="/login">
                                        <button className="btn btn-primary">Login</button>
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