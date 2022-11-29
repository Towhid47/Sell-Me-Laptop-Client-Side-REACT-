import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo/logo.png';
import { AuthContext } from '../../AuthContext/auth.context';
import './Navigationbar.css';
import Swal from 'sweetalert2';
import { Button } from 'react-bootstrap';
const Navigationbar = () => {

    const {user, sign_Out} = useContext(AuthContext);
    
    console.log(user);


    //////// Handle Log Out //////////
    const handleSignOut = () =>{
      sign_Out()
      .then(()=>{
          Swal.fire("Signed Out Successfully")
      })
      .catch(error => alert(error.message));
  }


    return (
        <div>
              <Navbar bg="light" className='p-4' expand="lg">
      <Container>
        <Navbar.Brand href="/"><img src={logo} alt="Brand Logo"></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to="/" className="text-decoration-none fs-4 mx-3 text-black fw-semibold item">Home</NavLink>
             {
              (user?.email) ?
                     <div className='d-lg-flex justify-content-between flex-column flex-lg-row'>
                        <NavLink to="/dashboard" className="text-decoration-none fs-4 mx-3 text-black fw-semibold item">Dashboard</NavLink>
                        <div className="text-decoration-none fs-4 mx-3 text-black fw-semibold item"><Button className='btn-light fs-5 fw-semibold' onClick={handleSignOut}>Logout <FontAwesomeIcon icon={faArrowRightFromBracket} /></Button></div> 
                        <div> <Link to="" title={user.displayName}><img className='w-75 rounded-circle' src={user.photoURL} alt=""></img></Link> </div>
                     </div>
                     :
                     <div>
                          <NavLink className="text-decoration-none mx-3 fs-4 text-black fw-semibold item" to="/login">Login</NavLink>
                          <NavLink className="text-decoration-none mx-3 fs-4 text-black fw-semibold item" to="/register">Register</NavLink>
                     </div>
             }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Navigationbar;