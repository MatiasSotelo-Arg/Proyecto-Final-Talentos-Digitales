import { useEffect } from "react";
import { useDispatch } from "react-redux";
import useFetch from "../../hooks/useFetch";
import { getCourses } from "../../redux/coursesSlice";

const DataLoader = () => {
  const { data, loading, error } = useFetch(
    import.meta.env.VITE_API_URL + "api/courses"
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(getCourses(data));
    }
  }, [data, dispatch]);

  if (loading) return <p>Cargando datos...</p>;
  if (error) return <p>Error al cargar los datos: {error.message}</p>;

  return null; // Este componente no renderiza nada visualmente
};

export default DataLoader;
