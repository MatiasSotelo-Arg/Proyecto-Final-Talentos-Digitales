import {NavLink} from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import LoginButton from "../Auth0/Login";
import LogoutButton from "../Auth0/Logout";
import Profile from "../Auth0/Profile";

const NavBar = () => {
    return (
        <nav>
            <div>
                <NavLink to="/">
                    <h1>Talentos Academy</h1>
                </NavLink>
                

                <div>
                    <ul>
                        <li>
                            <NavLink to="/carrito"><FiShoppingCart /></NavLink>
                        </li>
                        <li>
                            <NavLink to="/cursos">Cursos</NavLink>
                        </li>
                        <li>
                            <NavLink to="/categorias">Categorias</NavLink>
                        </li>
                        <li>
                            <NavLink to="/misCursos">Mis Cursos</NavLink>
                        </li>
                        <li>
                            <LoginButton/>
                            <LogoutButton/>
                            <Profile/>
                        </li>
                    </ul>
                </div>
                
            </div>
        </nav>
        
    )
}

export default NavBar;