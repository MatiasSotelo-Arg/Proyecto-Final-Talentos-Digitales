import { useSelector } from "react-redux";

import CartItemDetail from "../CartItemDetail/CartItemDetail";

const CartItemsList = () => {
  const carrito = useSelector((state) => state.cart.cart);

  if (carrito.length === 0) return <p>Carrito Vacio</p>;

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
