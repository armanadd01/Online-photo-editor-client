
import React from 'react';
import { Container, Form, Nav, NavDropdown, Navbar, Row, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../Media/Logo/logo.png'

const Header = () => {
    return (
        <>
        <Navbar bg="white" className='shadow-sm' expand="lg" >
            <Container>
                    <Navbar.Brand >
                        <Link to='/'>
                          <Image src={logo} fluid  style={{ maxWidth: '10rem' }}></Image>
                        </Link>
                        
                    </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        
                <Nav
                    className="ms-auto my-2 my-lg-3 align-items-center"
                    style={{ minHeight: '60px' }}
                    navbarScroll
                >
                            <Nav.Link >
                                <Link to='/'>Home</Link>
                            </Nav.Link>
                            <Nav.Link >
                                <Link to='/services'>Service</Link>
                            </Nav.Link>
                            <Nav.Link href="#" disabled>
                                Link
                            </Nav.Link>
                </Nav>
                <Form className="d-flex ms-5">
                    <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    {/* <Button variant="outline-success">Search</Button> */}
                </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
        
    );
};

export default Header;