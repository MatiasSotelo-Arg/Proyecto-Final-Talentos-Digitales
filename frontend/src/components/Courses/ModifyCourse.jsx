import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"; // Para obtener el ID del curso
import { updateCourse } from "../../redux/coursesSlice"; // Asegúrate de tener esta acción implementada
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const EditCourse = () => {
  const dispatch = useDispatch();
  const { courseId } = useParams(); // Obtiene el ID del curso de la URL
  const courses = useSelector((state) => state.courses.courses);
  const courseToEdit = courses.find((course) => course.id === courseId);

  const [courseData, setCourseData] = useState({
    name: "",
    description: "",
    category: "",
    subcategory: "",
    duration: 0,
    price: 0,
    instructor: "",
    startDate: "",
    endDate: "",
    status: "active",
    level: "",
    image: "",
    video: "",
  });

  useEffect(() => {
    if (courseToEdit) {
      setCourseData(courseToEdit); // Carga los datos del curso a editar
    }
  }, [courseToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseData({
      ...courseData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}api/courses/${courseId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(courseData),
        }
      );

      if (!response.ok) {
        throw new Error("Error al actualizar el curso.");
      }

      const updatedCourse = await response.json();
      dispatch(updateCourse(updatedCourse)); // Asegúrate de que la acción `updateCourse` esté implementada
      alert("Curso actualizado exitosamente.");
    } catch (error) {
      console.error("Error al actualizar el curso:", error);
      alert("Hubo un problema al actualizar el curso.");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Modificar Curso</h2>
      <Row className="mb-3">
        <Form.Group as={Col} md={4} controlId="formCourseName">
          <Form.Label>Nombre:</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={courseData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group as={Col} md={4} controlId="formCourseDescription">
          <Form.Label>Descripción:</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            value={courseData.description}
            onChange={handleChange}
            required
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md={4} controlId="formCourseCategory">
          <Form.Label>Categoría:</Form.Label>
          <Form.Control
            as="select"
            name="category"
            value={courseData.category}
            onChange={handleChange}
            required
          >
            <option value="">Seleccionar</option>
            <option value="Marketing">Marketing</option>
            <option value="Programación">Programación</option>
            <option value="Diseño">Diseño</option>
            <option value="Otros">Otros</option>
          </Form.Control>
        </Form.Group>
        <Form.Group as={Col} md={4} controlId="formCourseSubcategory">
          <Form.Label>Subcategoría:</Form.Label>
          <Form.Control
            type="text"
            name="subcategory"
            value={courseData.subcategory}
            onChange={handleChange}
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md={4} controlId="formCourseDuration">
          <Form.Label>Duración (horas):</Form.Label>
          <Form.Control
            type="number"
            name="duration"
            value={courseData.duration}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group as={Col} md={4} controlId="formCoursePrice">
          <Form.Label>Precio:</Form.Label>
          <Form.Control
            type="number"
            name="price"
            value={courseData.price}
            onChange={handleChange}
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md={4} controlId="formCourseInstructor">
          <Form.Label>Instructor ID:</Form.Label>
          <Form.Control
            type="text"
            name="instructor"
            value={courseData.instructor}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group as={Col} md={4} controlId="formCourseStartDate">
          <Form.Label>Fecha de inicio:</Form.Label>
          <Form.Control
            type="date"
            name="startDate"
            value={courseData.startDate}
            onChange={handleChange}
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md={4} controlId="formCourseEndDate">
          <Form.Label>Fecha de finalización:</Form.Label>
          <Form.Control
            type="date"
            name="endDate"
            value={courseData.endDate}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group as={Col} md={4} controlId="formCourseLevel">
          <Form.Label>Nivel:</Form.Label>
          <Form.Control
            as="select"
            name="level"
            value={courseData.level}
            onChange={handleChange}
          >
            <option value="">Seleccionar</option>
            <option value="beginner">Principiante</option>
            <option value="intermediate">Intermedio</option>
            <option value="advanced">Avanzado</option>
          </Form.Control>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md={4} controlId="formCourseImage">
          <Form.Label>Imagen (URL):</Form.Label>
          <Form.Control
            type="text"
            name="image"
            value={courseData.image}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group as={Col} md={4} controlId="formCourseVideo">
          <Form.Label>Video (URL):</Form.Label>
          <Form.Control
            type="text"
            name="video"
            value={courseData.video}
            onChange={handleChange}
          />
        </Form.Group>
      </Row>
      <Button variant="primary" type="submit">
        Actualizar Curso
      </Button>
    </Form>
  );
};

export default EditCourse;
