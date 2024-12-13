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

function App() {
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
          <Route path="/cursos" element={<CoursesCardContainer/>} />
          <Route path="/cursos/:cursoId" element={<CourseDetail />} />
          <Route path="/miscursos" element={<UserCourses/>} />
          <Route path="/modificar" element={<EditCourse courseId={"6757ada6a603d6032889a7be"}/>} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </div>

      <FooterContainer />
    </BrowserRouter>
  );
}

export default App;
