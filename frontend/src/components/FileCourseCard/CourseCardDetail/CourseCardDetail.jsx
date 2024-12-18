import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../../redux/cartSlice";

import "./CourseCardDetail.css";
import { useEffect, useState } from "react";

const CourseCardDetail = ({ courses }) => {
  const user = useSelector((state) => state.user);
  const [userCoursesId, setUserCoursesId] = useState([]);
  useEffect(() => {
    if (user) {
      setUserCoursesId(user.myCourses);
    }
  }, [user]);

  //handleAddCart
  const dispatch = useDispatch();

  const handleAddCart = (id) => {
    if (!userCoursesId.includes(id)) {
      const cursoFiltrado = courses.find((item) => item._id === id);
      dispatch(addCart(cursoFiltrado));
    }
  };

  //VERIFICA SI EL USUARIO TIENE EL CURSO PARA PERMITIRLE VERLO

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
                  maxWidth: "265px", // Controla el tamaño máximo de las tarjetas
                  cursor: "pointer",
                }}
              >
                <Card.Img
                  variant="top"
                  src={item.image}
                  className="rounded-0"
                  style={{ height: "148px" }}
                />
                <Card.Body className="border-0 text-start">
                  <Card.Title>
                    {item.name}
                    <Button
                      variant="primary"
                      className="btn-sm with-button text-white border-0 justify-content-end"
                      onClick={() => handleAddCart(item._id)}
                    >
                      <TiShoppingCart />
                    </Button>
                  </Card.Title>
                  {/* <Button
                    variant="primary"
                    className="bg-success border-0 border-white rounded-0"
                  >
                    Ver más
                  </Button> */}
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
