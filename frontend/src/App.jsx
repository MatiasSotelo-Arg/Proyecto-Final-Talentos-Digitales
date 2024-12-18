import Home from "./components/FileHome/Home/Home";
import NavBar from "./components/NavBar/NavBar";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Pruebas from "./components/pruebas";

// import CoursesCardContainer from "./components/FileCart/CoursesCardContainer/CoursesCardContainer";
import CourseDetail from "./components/FileCourse/CourseDetail/CourseDetail";
import DataLoader from "./components/DataLoader/DataLoader";
import UserCourses from "./components/UserCourses/UserCourses";

import EditCourse from "./components/CoursesCRUD/EditCourse";
import FooterContainer from "./components/Footer/FooterContainer/FooterContainer";
import LoadUserToDB from "./components/Auth0/LoadUserToDB";
import CartContainer from "./components/FileCart/CartContainer/CartContainer";
import CoursesCardContainer from "./components/FileCourseCard/CoursesCardContainer/CoursesCardContainer";
import CreateCourse from "./components/CoursesCRUD/CreateCourse";
import CoursesDashboard from "./components/Admin/CoursesDashboard";
import { ProtectedRoutesProv } from "./components/ProtectedRoutesProv";

import { useSelector } from "react-redux";
function App() {
  const user = useSelector((state) => state.user);
  console.log(user);
  return (
    <BrowserRouter>
      <DataLoader />
      <LoadUserToDB />
      <NavBar />

      <div style={{ minHeight: "85vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pruebas" element={<Pruebas />} />
          <Route path="/carrito" element={<CartContainer />} />
          <Route path="/cursos" element={<CoursesCardContainer />} />
          <Route path="/cursos/:cursoId" element={<CourseDetail />} />
          <Route path="/miscursos" element={<UserCourses />} />

          {/* INICIO RUTAS PROTEGIDAS ADMIN */}
          <Route
            element={
              <ProtectedRoutesProv
                isAllowed={!!user && user._id == import.meta.env.VITE_ADMIN_ID}
              />
            }
          >
            <Route path="/admin/crearcurso" element={<CreateCourse />} />
            <Route
              path="/admin/coursesdashboard"
              element={<CoursesDashboard />}
            />
            <Route
              path="/admin/editarcurso/:cursoId"
              element={<EditCourse />}
            />
          </Route>
          {/* FIN RUTAS PROTEGIDAS ADMIN */}

          <Route path="*" element={<Home />} />

          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </div>

      <FooterContainer />
    </BrowserRouter>
  );
}

export default App;
