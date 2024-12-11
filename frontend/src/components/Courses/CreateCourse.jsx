import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { createCourse } from "../../redux/coursesSlice"; // Asegúrate de tener esta acción en tu slice
import { Form, Button, Row, Col } from "react-bootstrap";
import "./FormStyles.css";

const CreateCourse = () => {
  const dispatch = useDispatch();
  const [courseData, setCourseData] = useState({
    name: "",
    description: "",
    category: "",
    subcategory: "",
    duration: 0,
    price: 0,
    likes: 0,
    instructor: "",
    startDate: "",
    endDate: "",
    status: "active",
    level: "",
    image: "",
    video: "",
    playlist: [],
  });

  const [instructors, setInstructors] = useState([]); // Estado para los instructores
  const [videoData, setVideoData] = useState({ name: "", url: "" }); // Estado para manejar los videos
  // Cargar instructores disponibles
  useEffect(() => {
    const fetchInstructors = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}api/instructors`
      );
      const data = await response.json();
      setInstructors(data); // Suponiendo que la respuesta es un array de instructores
    };

    fetchInstructors();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseData({
      ...courseData,
      [name]: value,
    });
  };
  const handleVideoChange = (e) => {
    const { name, value } = e.target;
    setVideoData({
      ...videoData,
      [name]: value,
    });
  };

  const handleAddToPlaylist = (e) => {
    e.preventDefault();
    if (videoData.name && videoData.url) {
      setCourseData((prevData) => ({
        ...prevData,
        playlist: [...prevData.playlist, videoData],
      }));
      setVideoData({ name: "", url: "" }); // Limpiar campos después de agregar
    } else {
      alert("Por favor, complete ambos campos para agregar un video.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(courseData);
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}api/courses`,
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
      <Row className="mb-3">
        <Form.Group as={Col} md={4} controlId="formCourseName">
          <Form.Label className="label-styled">Nombre:</Form.Label>
        </Form.Group>
        <Col md={8}>
          <Form.Control
            className="input-thick-border"
            type="text"
            name="name"
            value={courseData.name}
            onChange={handleChange}
            required
          />
        </Col>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} md={4} controlId="formCourseDescription">
          <Form.Label className="label-styled">Descripción:</Form.Label>
        </Form.Group>
        <Col md={8}>
          <Form.Control
            className="input-thick-border"
            as="textarea"
            name="description"
            value={courseData.description}
            onChange={handleChange}
            required
          />
        </Col>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} md={4} controlId="formCourseCategory">
          <Form.Label className="label-styled">Categoría:</Form.Label>
        </Form.Group>
        <Col md={8}>
          <Form.Control
            className="input-thick-border"
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
        </Col>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} md={4} controlId="formCourseSubcategory">
          <Form.Label className="label-styled">Subcategoría:</Form.Label>
        </Form.Group>
        <Col md={8}>
          <Form.Control
            className="input-thick-border"
            type="text"
            name="subcategory"
            value={courseData.subcategory}
            onChange={handleChange}
          />
        </Col>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} md={4} controlId="formCourseDuration">
          <Form.Label className="label-styled">Duración (horas):</Form.Label>
        </Form.Group>
        <Col md={8}>
          <Form.Control
            className="input-thick-border"
            type="number"
            name="duration"
            value={courseData.duration}
            onChange={handleChange}
          />
        </Col>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} md={4} controlId="formCoursePrice">
          <Form.Label className="label-styled">Precio:</Form.Label>
        </Form.Group>
        <Col md={8}>
          <Form.Control
            className="input-thick-border"
            type="number"
            name="price"
            value={courseData.price}
            onChange={handleChange}
          />
        </Col>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} md={4} controlId="formCourseInstructor">
          <Form.Label className="label-styled">Instructor:</Form.Label>
        </Form.Group>
        <Col md={8}>
          <Form.Control
            className="input-thick-border"
            as="select"
            name="instructor"
            value={courseData.instructor}
            onChange={handleChange}
            required
          >
            <option value="">Seleccionar instructor</option>
            {instructors.map((instructor) => (
              <option key={instructor._id} value={instructor._id}>
                {instructor.email}
              </option>
            ))}
          </Form.Control>
        </Col>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} md={4} controlId="formCourseStartDate">
          <Form.Label className="label-styled">Fecha de inicio:</Form.Label>
        </Form.Group>
        <Col md={8}>
          <Form.Control
            className="input-thick-border"
            type="date"
            name="startDate"
            value={courseData.startDate}
            onChange={handleChange}
          />
        </Col>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} md={4} controlId="formCourseEndDate">
          <Form.Label className="label-styled">
            Fecha de finalización:
          </Form.Label>
        </Form.Group>
        <Col md={8}>
          <Form.Control
            className="input-thick-border"
            type="date"
            name="endDate"
            value={courseData.endDate}
            onChange={handleChange}
          />
        </Col>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} md={4} controlId="formCourseLevel">
          <Form.Label className="label-styled">Nivel:</Form.Label>
        </Form.Group>
        <Col md={8}>
          <Form.Control
            className="input-thick-border"
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
        </Col>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} md={4} controlId="formCourseImage">
          <Form.Label className="label-styled">Imagen (URL):</Form.Label>
        </Form.Group>
        <Col md={8}>
          <Form.Control
            className="input-thick-border"
            type="text"
            name="image"
            value={courseData.image}
            onChange={handleChange}
          />
        </Col>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} md={4} controlId="formCourseVideo">
          <Form.Label className="label-styled">Video (URL):</Form.Label>
        </Form.Group>
        <Col md={8}>
          <Form.Control
            className="input-thick-border"
            type="text"
            name="video"
            value={courseData.video}
            onChange={handleChange}
          />
        </Col>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md={4} controlId="formVideoName">
          <Form.Label className="label-styled">Nombre del Video:</Form.Label>
        </Form.Group>
        <Col md={8}>
          <Form.Control
            className="input-thick-border"
            type="text"
            name="name"
            value={videoData.name}
            onChange={handleVideoChange}
            placeholder="Ingrese el nombre del video"
          />
        </Col>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md={4} controlId="formVideoURL">
          <Form.Label className="label-styled">URL del Video:</Form.Label>
        </Form.Group>
        <Col md={8}>
          <Form.Control
            className="input-thick-border"
            type="text"
            name="url"
            value={videoData.url}
            onChange={handleVideoChange}
            placeholder="Ingrese la URL del video"
          />
          <Button
            variant="secondary"
            onClick={handleAddToPlaylist}
            className="mt-2"
          >
            Agregar a Playlist
          </Button>
        </Col>
      </Row>

      {/* Mostrar videos en la playlist */}
      {courseData.playlist.length > 0 && (
        <Row className="mb-3">
          <Form.Group as={Col} md={4} controlId="formCoursePlaylist">
            <Form.Label className="label-styled">Playlist:</Form.Label>
          </Form.Group>
          <Col md={8}>
            <ul>
              {courseData.playlist.map((video, index) => (
                <li key={index}>
                  {video.name} - {video.url}
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      )}

      <Button variant="primary" type="submit" className="mt-3">
        Crear Curso
      </Button>
    </Form>
  );
};

export default CreateCourse;
