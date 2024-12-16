import { useSelector } from "react-redux";

import CartItemDetail from "../CartItemDetail/CartItemDetail";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const CartItemsList = () => {
  const carrito = useSelector((state) => state.cart.cart);

  if (carrito.length === 0) return (
    <div>
      <h3 className="mb-3">Carrito Vacío!</h3>
        <Link to="/cursos" className="text-decoration-none">
        
          <Button variant="secondary" className="mx-1 text-black bg-dark text-white border-0 rounded-0 btn btn-primary">
            Agregar Cursos
          </Button>
        </Link>
    </div>
  )

  return (
    <>
    <div>
    
      {carrito.map((item) => {
        return (
          <CartItemDetail item={item}/>
        );
      })}
        <div>
          <p className="fw-bold text-uppercase">Total: ${carrito.reduce((total, item) => total + item.price, 0)}</p>
        </div>
      </div>
    </>
  );
};

export default CartItemsList;
