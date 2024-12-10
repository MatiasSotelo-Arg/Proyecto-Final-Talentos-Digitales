import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addCart } from "../../redux/cartSlice";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";

function ItemDetail() {
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
          <h2 className="text-center">Detalle del Curso</h2>
        </Col>
      </Row>

      {/* Imagen y detalles del curso en una fila */}
      <Row className="mb-4">
        <Col md={12} className="d-flex">
          <Card
            className="mb-0"
            style={{ flexDirection: "row", width: "100%" }}
          >
            <Card.Img
              variant="top"
              src={cursoFiltrado.imagen}
              alt={cursoFiltrado.name}
              style={{
                maxWidth: "200px",
                maxHeight: "200px",
                objectFit: "cover",
              }}
            />
            <Card.Body>
              <Card.Title>{cursoFiltrado.name}</Card.Title>

              {!courseAcquired && (
                <>
                  <Card.Text>
                    <strong>Precio:</strong> ${cursoFiltrado.price}
                  </Card.Text>
                  <Button
                    variant="primary"
                    className="w-10"
                    onClick={handleAddCart}
                  >
                    Añadir al Carrito
                  </Button>
                </>
              )}
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

export default ItemDetail;
