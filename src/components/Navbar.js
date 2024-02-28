import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Navbar.css';
import MenuIcon from '@mui/icons-material/Menu';

function MyNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="white" fixed='top' className="navbar-custom">
      <Navbar.Brand as={NavLink} to="/">Subrrahmanyem</Navbar.Brand>     
      <Navbar.Toggle aria-controls="responsive-navbar-nav" className="custom-toggler" >
        <MenuIcon />
      </Navbar.Toggle>
      <Navbar.Collapse id="responsive-navbar-nav" >
        <Nav className='ms-auto'>
          <Nav.Link as={NavLink} to="/" exact activeClassName="active">Home</Nav.Link>
          <Nav.Link as={NavLink} to="/skills"  activeClassName="active">Skills</Nav.Link>          
          <Nav.Link as={NavLink} to="/projects"  activeClassName="active">Projects</Nav.Link>           
          <Nav.Link as={NavLink} to="/experience"  activeClassName="active">Experience</Nav.Link>
          <Nav.Link as={NavLink} to="/contact"  activeClassName="active">Contact</Nav.Link>
        </Nav>         
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;
