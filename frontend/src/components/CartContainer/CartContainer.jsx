import { useSelector } from "react-redux";
import CartItemsList from "../CartItemsList/CartItemsList";
import MercadoPago from "../Payments/mercadopago";

const CartContainer = () => {
  const cart = useSelector((state) => state.cart.cart);

  return (
    <>
      <div className="m-2">
        <h2>Carrito</h2>
      </div>

      <CartItemsList />

      <MercadoPago cart={cart} />
    </>
  );
};

export default CartContainer;
