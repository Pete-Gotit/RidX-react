import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import SignUp from './SignUp';
import Home from './Home';
import imaj from '../images/mainlogo.png'

function MainNavbar() {
  return (
    // <Router>
      <Navbar bg="dark" variant='dark' expand="lg" >
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={imaj}
              width="150"
              height="50"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href='/'>Home</Nav.Link>
              <Nav.Link href='/about'>About</Nav.Link>
              <Nav.Link href='/contact'>Contact Us</Nav.Link>
              <Nav.Link href='/signUp'>Sign Up </Nav.Link>
              <NavDropdown title="Login" id="basic-nav-dropdown">
                <NavDropdown.Item href="#rider">Rider</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="Driver">Driver</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    //     <Route>
    //       <Routes path='/about'>
    //         <About />
    //       </Routes>
    //       <Routes path='/contact'>
    //         <Contact />
    //       </Routes>
    //       <Routes path='/signup'>
    //         <SignUp />
    //       </Routes>
    //       <Routes path='/'>
    //         <Home />
    //       </Routes>
    //     </Route>
    // </Router>
  );
}

export default MainNavbar;