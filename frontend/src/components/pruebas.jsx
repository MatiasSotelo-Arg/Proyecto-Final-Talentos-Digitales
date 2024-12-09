import { useSelector, useDispatch } from "react-redux";
import { addCourse } from "../redux/coursesSlice";
import { useEffect } from "react";

const Pruebas = () => {
  const cursos = useSelector((state) => state.courses.courses);
  console.log("cursos", typeof cursos, cursos);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addCourse({ _id: 1, name: "Curso 1" }));
  }, [dispatch]);
  return (
    <>
      <h1>{cursos ? cursos.map((c) => c.name) : "No hay cursos"}</h1>;
    </>
  );
};
export default Pruebas;
