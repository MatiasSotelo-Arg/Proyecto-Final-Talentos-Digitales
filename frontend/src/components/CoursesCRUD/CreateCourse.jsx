import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { createCourse } from "../../redux/coursesSlice"; // Asegúrate de tener esta acción en tu slice
import { Form, Button, Row, Col } from "react-bootstrap";
import "./FormStyles.css";
import "./CreateCourse.css"

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

  const handleRemoveFromPlaylist = (index) => {
    setCourseData((prevData) => ({
      ...prevData,
      playlist: prevData.playlist.filter((_, i) => i !== index),
    }));
  };

  return (
    <Form onSubmit={handleSubmit}>
    <h2 className="text-center mb-4">Crear Curso</h2>
  
    {/* Nombre del Curso */}
    <Form.Group controlId="formCourseName" className="mb-3">
      <Form.Label>Nombre:</Form.Label>
      <Form.Control
        type="text"
        name="name"
        value={courseData.name}
        onChange={handleChange}
        required
        placeholder="Ingrese el nombre del curso"
        className="input-width"
      />
    </Form.Group>
  
    {/* Descripción */}
    <Form.Group controlId="formCourseDescription" className="mb-3">
      <Form.Label>Descripción:</Form.Label>
      <Form.Control
        as="textarea"
        name="description"
        value={courseData.description}
        onChange={handleChange}
        required
        placeholder="Ingrese una descripción del curso"
        className="input-width"
      />
    </Form.Group>
  
    {/* Categoría */}
    <Form.Group controlId="formCourseCategory" className="mb-3">
      <Form.Label>Categoría:</Form.Label>
      <Form.Control
        as="select"
        name="category"
        value={courseData.category}
        onChange={handleChange}
        required
        className="input-width"
      >
        <option value="">Seleccionar</option>
        <option value="Marketing">Marketing</option>
        <option value="Programación">Programación</option>
        <option value="Diseño">Diseño</option>
        <option value="Otros">Otros</option>
      </Form.Control>
    </Form.Group>
  
    {/* Subcategoría */}
    <Form.Group controlId="formCourseSubcategory" className="mb-3">
      <Form.Label>Subcategoría:</Form.Label>
      <Form.Control
        type="text"
        name="subcategory"
        value={courseData.subcategory}
        onChange={handleChange}
        placeholder="Ingrese una subcategoría (opcional)"
        className="input-width"
      />
    </Form.Group>
  
    {/* Duración */}
    <Form.Group controlId="formCourseDuration" className="mb-3">
      <Form.Label>Duración (horas):</Form.Label>
      <Form.Control
        type="number"
        name="duration"
        value={courseData.duration}
        onChange={handleChange}
        placeholder="Ingrese la duración en horas"
        className="input-width"
      />
    </Form.Group>
  
    {/* Precio */}
    <Form.Group controlId="formCoursePrice" className="mb-3">
      <Form.Label>Precio:</Form.Label>
      <Form.Control
        type="number"
        name="price"
        value={courseData.price}
        onChange={handleChange}
        placeholder="Ingrese el precio del curso"
        className="input-width"
      />
    </Form.Group>
  
    {/* Instructor */}
    <Form.Group controlId="formCourseInstructor" className="mb-3">
      <Form.Label>Instructor:</Form.Label>
      <Form.Control
        as="select"
        name="instructor"
        value={courseData.instructor}
        onChange={handleChange}
        required
        className="input-width"
      >
        <option value="">Seleccionar instructor</option>
        {instructors.map((instructor) => (
          <option key={instructor._id} value={instructor._id}>
            {instructor.email}
          </option>
        ))}
      </Form.Control>
    </Form.Group>
  
    <div className="mx-5">
{/* Fechas */}
<Row className="mb-3 ">
      <Col md={6}>
        <Form.Group controlId="formCourseStartDate">
          <Form.Label>Fecha de inicio:</Form.Label>
          <Form.Control
            type="date"
            name="startDate"
            value={courseData.startDate}
            onChange={handleChange}
            className="input-width"
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
            className="input-width"
          />
        </Form.Group>
      </Col>
    </Row>
  
    {/* Nivel */}
    <Form.Group controlId="formCourseLevel" className="mb-3">
      <Form.Label>Nivel:</Form.Label>
      <Form.Control
        as="select"
        name="level"
        value={courseData.level}
        onChange={handleChange}
        className="input-width"
      >
        <option value="">Seleccionar</option>
        <option value="beginner">Principiante</option>
        <option value="intermediate">Intermedio</option>
        <option value="advanced">Avanzado</option>
      </Form.Control>
    </Form.Group>
  
    {/* Imagen y Video */}
    <Row className="mb-3">
      <Col md={6}>
        <Form.Group controlId="formCourseImage">
          <Form.Label>Imagen (URL):</Form.Label>
          <Form.Control
            type="text"
            name="image"
            value={courseData.image}
            onChange={handleChange}
            placeholder="Ingrese la URL de la imagen"
            className="input-width"
          />
        </Form.Group>
      </Col>
      <Col md={6}>
        <Form.Group controlId="formCourseVideo">
          <Form.Label>Video (URL):</Form.Label>
          <Form.Control
            type="text"
            name="video"
            value={courseData.video}
            onChange={handleChange}
            placeholder="Ingrese la URL del video"
            className="input-width"
          />
        </Form.Group>
      </Col>
    </Row>
  
    {/* Playlist */}
    <Form.Group className="mb-3">
      <Form.Label>Agregar Video a la Playlist:</Form.Label>
      <Row>
        <Col md={6}>
          <Form.Control
            type="text"
            name="name"
            value={videoData.name}
            onChange={handleVideoChange}
            placeholder="Nombre del video"
            className="input-width"
          />
        </Col>
        <Col md={6}>
          <Form.Control
            type="text"
            name="url"
            value={videoData.url}
            onChange={handleVideoChange}
            placeholder="URL del video"
            className="input-width"
          />
        </Col>
      </Row>
      <Button
        variant="secondary"
        onClick={handleAddToPlaylist}
        className="mt-5 w-30 w-md-auto"
      >
        Agregar a Playlist
      </Button>
    </Form.Group>
  
    {courseData.playlist.length > 0 && (
      <div className="mb-3">
        <h5>Playlist:</h5>
        <ul className="list-unstyled">
          {courseData.playlist.map((video, index) => (
            <li
              key={index}
              className="d-flex justify-content-between align-items-center mb-2"
            >
              <span>
                {video.name} -{" "}
                <a
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {video.url}
                </a>
              </span>
              <Button
                variant="danger"
                size="sm"
                onClick={() => handleRemoveFromPlaylist(index)}
              >
                Eliminar
              </Button>
            </li>
          ))}
        </ul>
      </div>
    )}
    </div>
    
  
    <Button variant="primary" type="submit" className="w-30 w-md-auto mb-5 mt-3">
      Crear Curso
    </Button>
  </Form>
  
  );
};

export default CreateCourse;
