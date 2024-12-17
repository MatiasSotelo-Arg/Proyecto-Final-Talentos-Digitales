import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteItemCart } from "../../../redux/cartSlice";


const CartItemDetail = ({item}) => {

    const dispatch = useDispatch();

    const handleDeleteItem = (itemId) => {
        dispatch(deleteItemCart(itemId));
    };

  return (
    <div key={item._id} className="d-flex justify-content-center my-4">

        <img src={item.image} alt={item.name}/>

        <div className="d-flex flex-column align-items-start justify-content-center mx-4">
            <p className="fw-bold text-uppercase">{item.name}</p>
            <p>
                $<span>{item.price}</span>
            </p>
        </div>

        <div className="d-flex align-items-center justify-content-center px-1">
            <Button onClick={() => handleDeleteItem(item._id)} className="h-10 text-black bg-dark text-white border-0 rounded-0 btn btn-primary">X</Button>
        </div>
        
    </div>
  )
}

export default CartItemDetail