
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Pruebas from "./components/pruebas";

import useFetch from "./hooks/useFetch";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCourses } from "./redux/coursesSlice";
import CoursesContainer from "./components/CoursesContainer/CoursesContainer";
import ItemDetail from "./components/CourseDetail/ItemDetail";

function App() {
  const { data, loading, error } = useFetch(
    import.meta.env.VITE_API_URL + "api/courses"
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(getCourses(data));
    }
  }, [data, dispatch]);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pruebas" element={<Pruebas />} />
        <Route path="/cursos" element={<CoursesContainer />} />
        <Route path="/cursos/:cursoId" element={<ItemDetail/>} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
export default App;
