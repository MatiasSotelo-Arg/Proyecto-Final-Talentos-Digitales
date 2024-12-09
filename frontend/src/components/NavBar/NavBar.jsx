import {NavLink} from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

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
                    </ul>
                </div>
                
            </div>
        </nav>
        
    )
}

export default NavBar;