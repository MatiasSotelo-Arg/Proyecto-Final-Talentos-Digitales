import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../../redux/cartSlice";
import { useAuth0 } from "@auth0/auth0-react";

import "./CourseCardDetail.css";
import { useEffect, useState } from "react";

const CourseCardDetail = ({ courses }) => {
  const user = useSelector((state) => state.user);
  const [userCoursesId, setUserCoursesId] = useState([]);
  const { isAuthenticated } = useAuth0();
  const { loginWithRedirect } = useAuth0();
  useEffect(() => {
    if (user && user.myCourses) {
      setUserCoursesId(user.myCourses);
    }
  }, [user]);

  //handleAddCart
  const dispatch = useDispatch();

  const handleAddCart = (id) => {
    if (!isAuthenticated) {
      // Redirige al login si no está autenticado
      alert("Por favor, ingrese antes de Comprar");
      loginWithRedirect();
      return;
    }

    if (!userCoursesId.includes(id)) {
      const cursoFiltrado = courses.find((item) => item._id === id);
      dispatch(addCart(cursoFiltrado));
    }
  };

  //obtener url

  return (
    <div className="container">
      <div className="row justify-content-center">
        {courses.map((item) => (
          <div
            key={item._id}
            className="col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-4"
          >
            <Link
              to={`/cursos/${item._id}`}
              className="text-decoration-none text-dark w-100"
            >
              <Card
                className="p-0 border-0 hover-card"
                style={{
                  maxWidth: "340px", // Controla el tamaño máximo de las tarjetas
                  cursor: "pointer",
                }}
              >
                <Card.Img
                  variant="top"
                  src={item.image}
                  className="rounded-0"
                  style={{ height: "230px" }}
                />

                {/* Card Body */}
                <Card.Body className="border-0 text-start">
                  <div className="d-flex justify-content-between align-items-center">
                    <Card.Title>
                      <p>{item.name}</p>
                    </Card.Title>

                    {!userCoursesId.includes(item._id) && (
                      <Button
                        variant="primary"
                        className="btn-sm with-button text-white border-0 text-black bg-dark text-white border-0 rounded-0 btn btn-primary"
                        onClick={() => handleAddCart(item._id)}
                      >
                        <TiShoppingCart />
                      </Button>
                    )}
                  </div>
                </Card.Body>
              </Card>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseCardDetail;
