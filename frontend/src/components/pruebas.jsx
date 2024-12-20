import { useSelector, useDispatch } from "react-redux";
import { addCourse } from "../redux/coursesSlice";
import { useEffect } from "react";
import CreateCourse from "./CoursesCRUD/CreateCourse";
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import { FiPlusCircle } from "react-icons/fi";
import DeleteCourseButton from "./CoursesCRUD/DeleteCourse";
import EditCourse from "./CoursesCRUD/EditCourse";
import Carousel from "../components/FileCourse/CourseCarousel/CourseCarousel";
const Pruebas = () => {
  // const cursos = useSelector((state) => state.courses.courses);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(addCourse({ _id: 1, name: "Curso 1" }));
  // }, [dispatch]);

  return (
    <Container className="mt-5">
      {/* <Row className="mb-4 text-center">
        <Col>
          <h1 className="display-4 text-primary font-weight-bold">
            Administrar Cursos
          </h1>
          <p className="text-muted">Añade y organiza tus cursos fácilmente</p>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md={6} lg={4}>
          <Card className="shadow-lg border-0">
            <Card.Body>
              <div className="text-center mb-3">
                <FiPlusCircle size={50} color="#007bff" />
              </div>
              <Button variant="primary" className="w-100" size="lg">
                Agregar Nuevo Curso
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row> */}
      <Carousel />
      {/* <CreateCourse /> */}
      {/* <DeleteCourseButton courseId={"675919853a93a7a7519e8e2a"} /> */}
      {/* <EditCourse courseId={"67410535b2540e7763e04bed"} /> */}
    </Container>
  );
};

export default Pruebas;
