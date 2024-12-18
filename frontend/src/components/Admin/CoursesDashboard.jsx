import { GrEdit } from "react-icons/gr";

import DeleteCourseButton from "../CoursesCRUD/DeleteCourse";
import { useSelector, useDispatch } from "react-redux";
import { Table, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const CoursesDashboard = () => {
  const courses = useSelector((state) => state.courses.courses); // Asumiendo que `state.courses` contiene el array de cursos.

  return (
    <Container>
      <h2 className="my-4 text-center">Courses Dashboard</h2>

      {/* Botón para crear un nuevo curso */}
      <div className="d-flex justify-content-center mb-3">
        <Button className="btn" size="lg" variant="success">
          {" "}
          <Link
            className="text-decoration-none text-white"
            to="/admin/crearcurso"
          >
            {" "}
            Crear Curso
          </Link>
        </Button>
      </div>

      {/* Tabla de cursos */}
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {courses.length > 0 ? (
            courses.map((course, index) => (
              <tr key={course._id}>
                <td>{index + 1}</td>
                <td>{course.name}</td>
                <td>{course.description}</td>
                <td>
                  <div className="d-flex gap-2">
                    {/* Botón de editar */}

                    <Button className="btn">
                      <Link
                        className="text-decoration-none text-white"
                        to={`/admin/editarcurso/${course._id}`}
                      >
                        <GrEdit />
                      </Link>
                    </Button>

                    {/* Botón de borrar */}
                    <DeleteCourseButton courseId={course._id} />
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">
                No courses available.
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </Container>
  );
};

export default CoursesDashboard;
