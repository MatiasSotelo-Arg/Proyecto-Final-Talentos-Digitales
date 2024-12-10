import { useState } from "react";
import { useDispatch } from "react-redux";
import { createCourse } from "../../redux/coursesSlice"; // Asegúrate de tener esta acción en tu slice
import { Form, Button, Row, Col } from "react-bootstrap";

const CreateCourse = () => {
  const dispatch = useDispatch();
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
        `${import.meta.env.VITE_API_URL}/api/courses`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(courseData),
        }
      );

      if (!response.ok) {
        throw new Error("Error al crear el curso");
      }

      const data = await response.json();
      dispatch(createCourse(data));
      alert("Curso creado exitosamente");
    } catch (error) {
      console.error("Error:", error);
      alert("Error al crear el curso");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Crear Curso</h2>
      <Row>
        <Col md={6}>
          <Form.Group controlId="formCourseName">
            <Form.Label>Nombre:</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={courseData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="formCourseCategory">
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
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Form.Group controlId="formCourseDescription">
            <Form.Label>Descripción:</Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              value={courseData.description}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Form.Group controlId="formCourseSubcategory">
            <Form.Label>Subcategoría:</Form.Label>
            <Form.Control
              type="text"
              name="subcategory"
              value={courseData.subcategory}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="formCourseDuration">
            <Form.Label>Duración (horas):</Form.Label>
            <Form.Control
              type="number"
              name="duration"
              value={courseData.duration}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Form.Group controlId="formCoursePrice">
            <Form.Label>Precio:</Form.Label>
            <Form.Control
              type="number"
              name="price"
              value={courseData.price}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="formCourseInstructor">
            <Form.Label>Instructor ID:</Form.Label>
            <Form.Control
              type="text"
              name="instructor"
              value={courseData.instructor}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Form.Group controlId="formCourseStartDate">
            <Form.Label>Fecha de inicio:</Form.Label>
            <Form.Control
              type="date"
              name="startDate"
              value={courseData.startDate}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="formCourseEndDate">
            <Form.Label>Fecha de finalización:</Form.Label>
            <Form.Control
              type="date"
              name="endDate"
              value={courseData.endDate}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Form.Group controlId="formCourseLevel">
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
        </Col>
        <Col md={6}>
          <Form.Group controlId="formCourseImage">
            <Form.Label>Imagen (URL):</Form.Label>
            <Form.Control
              type="text"
              name="image"
              value={courseData.image}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Form.Group controlId="formCourseVideo">
            <Form.Label>Video (URL):</Form.Label>
            <Form.Control
              type="text"
              name="video"
              value={courseData.video}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
      </Row>
      <Button variant="primary" type="submit">
        Crear Curso
      </Button>
    </Form>
  );
};

export default CreateCourse;
