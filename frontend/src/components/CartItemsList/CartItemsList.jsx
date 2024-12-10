import { Button } from "react-bootstrap";
import { useSelector,useDispatch } from "react-redux";
import { deleteItemCart,emptyCart } from "../../redux/cartSlice";

const CartItemsList = () => {
  const carrito = useSelector((state) => state.cart.cart);

  console.log(carrito);

  if (carrito.length === 0) return <p>Carrito Vacio</p>;

  const dispatch = useDispatch();

  const handleDeleteItem = (itemId) => {
    dispatch(deleteItemCart(itemId))
  }

  const handleEmptyCart = () => {
    dispatch(emptyCart())
  }

  return (
    <>
      {
        carrito.map((item) => {
          return (
            <div key={item._id}>
              <p>{item.name}</p>

              <Button onClick={() => handleDeleteItem(item._id)} >X</Button>
              <p>$<span>{item.price}</span></p>

              
            </div>
          );
        })
      }
      <div>Total: ${carrito.reduce((total, item) => total + item.price, 0)}</div>
      <Button onClick={handleEmptyCart} >Vaciar Carrito</Button>
    </>
  );
};

export default CartItemsList;
