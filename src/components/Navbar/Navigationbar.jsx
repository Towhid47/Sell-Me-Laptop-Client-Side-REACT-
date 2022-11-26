import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo/logo.png';
import './Navigationbar.css';
const Navigationbar = () => {
    return (
        <div>
              <Navbar bg="light" className='p-4' expand="lg">
      <Container>
        <Navbar.Brand href="/"><img src={logo} alt="Brand Logo"></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to="/" className="text-decoration-none fs-4 text-black fw-semibold item">Home</NavLink>
            <NavLink to="/categories" className="ms-4 text-decoration-none fs-4 text-black fw-semibold item">Categories</NavLink>
             
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Navigationbar;