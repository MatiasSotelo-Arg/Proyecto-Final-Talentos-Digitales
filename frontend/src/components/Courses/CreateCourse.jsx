import { useState } from "react";
import { useDispatch } from "react-redux";
import { createCourse } from "../../redux/coursesSlice"; // Asegúrate de tener esta acción en tu slice

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
      // Llama a tu API para crear un curso (ejemplo: /api/courses)
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
      dispatch(createCourse(data)); // Asegúrate de que la acción `createCourse` esté implementada
      alert("Curso creado exitosamente");
    } catch (error) {
      console.error("Error:", error);
      alert("Error al crear el curso");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Crear Curso</h2>
      <label>
        Nombre:
        <input
          type="text"
          name="name"
          value={courseData.name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Descripción:
        <textarea
          name="description"
          value={courseData.description}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Categoría:
        <select
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
        </select>
      </label>
      <label>
        Subcategoría:
        <input
          type="text"
          name="subcategory"
          value={courseData.subcategory}
          onChange={handleChange}
        />
      </label>
      <label>
        Duración (horas):
        <input
          type="number"
          name="duration"
          value={courseData.duration}
          onChange={handleChange}
        />
      </label>
      <label>
        Precio:
        <input
          type="number"
          name="price"
          value={courseData.price}
          onChange={handleChange}
        />
      </label>
      <label>
        Instructor ID:
        <input
          type="text"
          name="instructor"
          value={courseData.instructor}
          onChange={handleChange}
        />
      </label>
      <label>
        Fecha de inicio:
        <input
          type="date"
          name="startDate"
          value={courseData.startDate}
          onChange={handleChange}
        />
      </label>
      <label>
        Fecha de finalización:
        <input
          type="date"
          name="endDate"
          value={courseData.endDate}
          onChange={handleChange}
        />
      </label>
      <label>
        Nivel:
        <select name="level" value={courseData.level} onChange={handleChange}>
          <option value="">Seleccionar</option>
          <option value="beginner">Principiante</option>
          <option value="intermediate">Intermedio</option>
          <option value="advanced">Avanzado</option>
        </select>
      </label>
      <label>
        Imagen (URL):
        <input
          type="text"
          name="image"
          value={courseData.image}
          onChange={handleChange}
        />
      </label>
      <label>
        Video (URL):
        <input
          type="text"
          name="video"
          value={courseData.video}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Crear Curso</button>
    </form>
  );
};

export default CreateCourse;
