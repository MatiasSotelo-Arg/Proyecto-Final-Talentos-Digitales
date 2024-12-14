import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import LoginButton from "../Auth0/Login";
import LogoutButton from "../Auth0/Logout";
import Profile from "../Auth0/Profile";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import "./NavBar.css";
import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {
  const cart = useSelector((state) => state.cart.cart);
  const cartItemCount = cart.length;
  const { isAuthenticated } = useAuth0();

  return (
    <Navbar expand="lg" className="bg-success text-white">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="text-white">
          <h1>
            &gt;Talentos<span className="text-black"> Academy_</span>
          </h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-white" />
        <Navbar.Collapse id="basic-navbar-nav" className="reset">
          <Nav className="margin-reset">
            <Nav.Item className="position-relative">
              <Nav.Link as={NavLink} to="/carrito" className="text-white mx-1">
                <FiShoppingCart />
              </Nav.Link>
              {cartItemCount > 0 && (
                <div className="cart-badge position-absolute">
                  {cartItemCount}
                </div>
              )}
            </Nav.Item>
            {/* <Nav.Item>
              <Nav.Link as={NavLink} to="/carrito" className="text-white mx-1">
                <FiShoppingCart />
              </Nav.Link>
            </Nav.Item> */}
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
            {isAuthenticated && (
              <Nav.Item>
                <Nav.Link
                  as={NavLink}
                  to="/miscursos"
                  className="text-white mx-1"
                >
                  Mis Cursos
                </Nav.Link>
              </Nav.Item>
            )}

            <Nav.Item className="mx-1 text-white">
              <NavLink to="/profile">
                <Profile />
              </NavLink>
            </Nav.Item>

            <Nav.Item>
              {isAuthenticated ? <LogoutButton /> : <LoginButton />}
            </Nav.Item>

            {/* Dropdown para "Mi Cuenta" */}
            {/* <NavDropdown
              title="Mi Cuenta"
              id="basic-nav-dropdown"
              className="bg-white mx-1"
            >
              <NavDropdown.Item className="text-white">
                {isAuthenticated ? <LogoutButton /> : <LoginButton />}
              </NavDropdown.Item>

              <NavDropdown.Item>
                <Profile />
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
