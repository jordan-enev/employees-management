import React from 'react';
import { Container, Navbar as BSNavbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <BSNavbar bg='light' variant='light'>
      <Container>
        <BSNavbar.Brand>
          <Link to='/' className='text-decoration-none'>Employees management</Link>
        </BSNavbar.Brand>
        <Nav className='mr-right'>
          <Link to='/employee/create'>
            <Button variant='primary'>Create</Button>
          </Link>
        </Nav>
      </Container>
    </BSNavbar>
  );
}

export default Navbar;
