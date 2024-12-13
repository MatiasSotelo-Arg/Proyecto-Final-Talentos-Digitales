import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addCart } from "../../../redux/cartSlice";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";

import './CourseDetail.css'
import CoursePlayListContainer from "../CoursePlayListContainer/CoursePlayListContainer";


function CourseDetail() {
  const { cursoId } = useParams();
  const cursos = useSelector((state) => state.courses.courses);
  const userCoursesId = useSelector((state) => state.userCourses.userCourses);
  const [cursoFiltrado, setCursoFiltrado] = useState(null);

  useEffect(() => {
    if (cursos.length > 0) {
      const cursoEncontrado = cursos.find((item) => item._id === cursoId);

      if (cursoEncontrado) {
        setCursoFiltrado(cursoEncontrado);
      }
    }
  }, [cursos, cursoId]);

  //handleAddCart
  const dispatch = useDispatch();

  const handleAddCart = () => {
    dispatch(addCart(cursoFiltrado));
  };

  //VERIFICA SI EL USUARIO TIENE EL CURSO PARA PERMITIRLE VERLO
  const courseAcquired = userCoursesId.includes(cursoId);

  if (!cursoFiltrado) {
    return <p>Cargando curso...</p>;
  }

  return (
    <Container className="mt-5">
      <Row className="mb-4">
        <Col>
          <h2 className="text-center text-sm-start">Detalle del Curso</h2>
        </Col>
      </Row>

      {/* Imagen y detalles del curso en una fila */}
      <Row className="mb-4 my-5">
  <Col md={12}>
    <Card className="mb-0 d-flex flex-column flex-md-row w-100 border-0">
      {/* Video del curso */}
      <iframe
        className="with-desktop"
        width="100%"
        height="400"
        src="https://www.youtube.com/embed/acuU_LRH094?si=n4oYe9-kPVLLfgoR"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

      {/* Detalles del curso */}
      <Card.Body className="d-flex flex-column text-start border-bottom border-sm border pb-4 pb-sm-0 add-width">
        {/* Nombre del curso */}
        <Card.Title>{cursoFiltrado.name}</Card.Title>

        {/* Precio y botón de compra */}
        {!courseAcquired ? (
          <>
            <Card.Text>
              <strong>Precio:</strong> ${cursoFiltrado.price}
            </Card.Text>
            <Button
              variant="primary"
              className="btn-sm with-button text-white bg-dark border-0 "
              onClick={handleAddCart}
            >
              Añadir al Carrito
            </Button>
          </>
        ) : 

        <>
          <CoursePlayListContainer/>
        </>
      
      }
      </Card.Body>
    </Card>
  </Col>
</Row>


      {/* Resto de la información */}
      <Row>
        <Col md={12}>
          <div className="mb-4">
            <h4>Descripción</h4>
            <p>{cursoFiltrado.description}</p>
          </div>

          <div className="mb-4">
            {courseAcquired ? <h4>Calificar</h4> : <h4>Calificaciones</h4>}
            <div>
              {courseAcquired ? <Button>❤️</Button> : "❤️"}

              <p>{cursoFiltrado.duration} corazones</p>
            </div>
          </div>

          <div className="mb-4">
            <h4>Comentarios</h4>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
              temporibus ratione quidem suscipit, voluptas beatae tempore ab
              excepturi nihil totam facilis neque, assumenda praesentium tempora
              numquam dolorum aut consequatur dolore.
            </div>
          </div>

          {courseAcquired && (
            <div className="mb-4">
              <h4>Agregar un comentario</h4>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Escriba su comentario..."
              />
              <Button variant="primary" className="w-10" onClick>
                Agregar Comentario
              </Button>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default CourseDetail;
