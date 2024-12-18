import { useSelector } from "react-redux";

import CartItemDetail from "../CartItemDetail/CartItemDetail";
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { emptyCart } from "../../../redux/cartSlice";
import axios from "axios";
import { addMyCourses } from "../../../redux/userCoursesSlice";

const CartItemsList = () => {
  const carrito = useSelector((state) => state.cart.cart);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [discountCode, setDiscountCode] = useState("");
  const [discountApplied, setDiscountApplied] = useState(false);

  const addToMyCourses = async (userId, ids) => {
    // const ids = carrito.map((item) => item._id);
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_API_URL}api/users/add/${userId}`,
        {
          field: "myCourses",
          value: ids, // Array con los elementos a añadir
        }
      );
      console.log("Updated user:", response.data);
      return response.data; // Retorna el usuario actualizado
    } catch (error) {
      console.error(
        "Error adding to myCourses:",
        error.response?.data || error
      );
      throw error; // Lanza el error si deseas manejarlo en otro lugar
    }
  };
  const calculateTotal = () => {
    const total = carrito.reduce((total, item) => total + item.price, 0);
    return discountApplied ? 0 : total; // Si se aplicó el descuento, el total es 0
  };
  const handleApplyDiscount = () => {
    if (discountCode === "TalentosDigitales2024") {
      setDiscountApplied(true); // Aplica el descuento
      const ids = carrito.map((item) => item._id);
      dispatch(addMyCourses(ids));
      dispatch(emptyCart());
      addToMyCourses(user._id, ids)
        .then((updatedUser) => {
          console.log("User updated successfully:", updatedUser);
        })
        .catch((error) => {
          console.error("Failed to update user:", error);
        });
      alert("Descuento aplicado exitosamente. Cursos Comprados!");
    } else {
      setDiscountApplied(false); // Código inválido
      alert("Código de descuento inválido.");
    }
  };

  if (!carrito || carrito.length === 0)
    return (
      <div>
        <h3 className="mb-3">Carrito Vacío!</h3>
        <Link to="/cursos" className="text-decoration-none">
          <Button
            variant="secondary"
            className="mx-1 text-black bg-dark text-white border-0 rounded-0 btn btn-primary"
          >
            Agregar Cursos
          </Button>
        </Link>
      </div>
    );

  return (
    <>
      <div>
        {carrito.map((item) => {
          return <CartItemDetail key={item._id} item={item} />;
        })}
        <div className="mt-4">
          <p className="fw-bold text-uppercase">
            Total: ${calculateTotal().toFixed(2)}
          </p>
          <Form className="d-flex align-items-center">
            <Form.Control
              type="text"
              placeholder="Ingresa el código de descuento"
              value={discountCode}
              onChange={(e) => setDiscountCode(e.target.value)}
              className="me-2"
            />
            <Button variant="primary" onClick={handleApplyDiscount}>
              Aplicar Descuento
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default CartItemsList;
