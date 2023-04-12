import React from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'


const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand className='fw-bold'>NextStep inc</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto ">
            
          <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/statistics">Statistic</Nav.Link>
            <Nav.Link as={Link} to="/applied-jobs">Applied Jobs</Nav.Link>
            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
            
           
            
          </Nav>
          <div><Button variant="success">Start Applying</Button></div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;