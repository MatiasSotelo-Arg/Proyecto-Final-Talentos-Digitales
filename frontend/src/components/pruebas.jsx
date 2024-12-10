import { useSelector, useDispatch } from "react-redux";
import { addCourse } from "../redux/coursesSlice";
import { useEffect } from "react";
import CreateCourse from "./Courses/CreateCourse";
import DeleteCourseButton from "./Courses/DeleteCourse";

const Pruebas = () => {
  //   const cursos = useSelector((state) => state.courses.courses);
  //   console.log("cursos", typeof cursos, cursos);
  //   const dispatch = useDispatch();
  //   useEffect(() => {
  //     dispatch(addCourse({ _id: 1, name: "Curso 1" }));
  //   }, [dispatch]);
  return (
    <>
      <CreateCourse />
      <DeleteCourseButton courseId={1} />
    </>
  );
};
export default Pruebas;
