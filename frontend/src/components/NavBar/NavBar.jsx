import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import LoginButton from "../Auth0/Login";
import LogoutButton from "../Auth0/Logout";
import Profile from "../Auth0/Profile";
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

import './Navbar.css';

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-success text-white">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="text-white">
          <h1>&gt;Talentos<span className='text-black'> Academy_</span></h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-white' />
        <Navbar.Collapse id="basic-navbar-nav" className='reset'>
          <Nav className="margin-reset">
            <Nav.Item>
              <Nav.Link as={NavLink} to="/carrito" className="text-white mx-1">
                <FiShoppingCart />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/cursos" className="text-white mx-1">
                Cursos
              </Nav.Link>
            </Nav.Item>
            {/* <Nav.Item>
              <Nav.Link as={NavLink} to="/categorias" className="text-white">
                Categorías
              </Nav.Link>
            </Nav.Item> */}
            <Nav.Item>
              <Nav.Link as={NavLink} to="/miscursos" className="text-white mx-1">
                Mis Cursos
              </Nav.Link>
            </Nav.Item>

            {/* Dropdown para "Mi Cuenta" */}
            <NavDropdown title="Mi Cuenta" id="basic-nav-dropdown" className="bg-white mx-1">
              <NavDropdown.Item className="text-white">
                <LoginButton />
              </NavDropdown.Item>
              <NavDropdown.Item className="text-white">
                <LogoutButton />
              </NavDropdown.Item>
              <NavDropdown.Item >
                <Profile />
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
