import { useSelector } from "react-redux";
import CartItemsList from "../CartItemsList/CartItemsList";
import MercadoPago from "../../Payments/MercadoPago";

import { Button } from "react-bootstrap";

import { useDispatch } from "react-redux";
import { emptyCart } from "../../../redux/cartSlice";


const CartContainer = () => {
  const cart = useSelector((state) => state.cart.cart);

  const dispatch = useDispatch();

  const handleEmptyCart = () => {
    dispatch(emptyCart());
  };
  return (

    
    <>
      <div className="mx-2 ms-lg-5 my-3 text-start">
        <h2>Carrito</h2>
      </div>

      <div className="m-4">
        <CartItemsList />

        <div>
          {cart.length > 0 && 
          
          <div>
            <MercadoPago cart={cart}/>
            <Button className="h-10 text-black bg-dark text-white border-0 rounded-0 btn btn-primary btn btn-primary mx-1" onClick={handleEmptyCart}>Vaciar Carrito</Button>
          </div>}
        </div>
      </div>
      
    </>
  );
};

export default CartContainer;
