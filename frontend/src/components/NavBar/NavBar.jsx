import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import LoginButton from "../Auth0/Login";
import LogoutButton from "../Auth0/Logout";
import Profile from "../Auth0/Profile";
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-dark text-white">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="text-white">
          <h1>Talentos Academy</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Item>
              <Nav.Link as={NavLink} to="/carrito" className="text-white">
                <FiShoppingCart />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/cursos" className="text-white">
                Cursos
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/categorias" className="text-white">
                Categorías
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/miscursos" className="text-white">
                Mis Cursos
              </Nav.Link>
            </Nav.Item>

            {/* Dropdown para "Mi Cuenta" */}
            <NavDropdown title="Mi Cuenta" id="basic-nav-dropdown" >
              <NavDropdown.Item className="text-white">
                <LoginButton />
              </NavDropdown.Item>
              <NavDropdown.Item className="text-white">
                <LogoutButton />
              </NavDropdown.Item>
              <NavDropdown.Item className="text-white">
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
