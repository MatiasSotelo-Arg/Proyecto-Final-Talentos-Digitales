import { useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import { deleteCourse } from "../../redux/coursesSlice"; // Asegúrate de tener esta acción implementada
import { MdDeleteForever } from "react-icons/md";

const DeleteCourseButton = ({ courseId }) => {
  const dispatch = useDispatch();

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "¿Estás seguro de que deseas eliminar este curso?"
    );

    if (confirmDelete) {
      try {
        // Si estás utilizando una API para manejar cursos:
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}api/courses/${courseId}`,
          { method: "DELETE" }
        );
        if (response.status === 404) {
          alert("El curso no existe o ya fue eliminado.");
          return;
        }

        if (!response.ok) {
          throw new Error("Error al borrar el curso.");
        }

        dispatch(deleteCourse(courseId)); // Asegúrate de que esta acción esté implementada en el slice
        alert("Curso eliminado exitosamente.");
      } catch (error) {
        console.error("Error al eliminar el curso:", error);
        alert("Hubo un problema al eliminar el curso.");
      }
    }
  };

  return (
    <Button
      variant="danger"
      onClick={handleDelete}
      style={{ fontWeight: "bold", fontSize: "1rem" }}
    >
      <MdDeleteForever />
    </Button>
  );
};

export default DeleteCourseButton;
