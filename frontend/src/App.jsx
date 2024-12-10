
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Pruebas from "./components/pruebas";

import CoursesContainer from "./components/CoursesContainer/CoursesContainer";
import ItemDetail from "./components/CourseDetail/ItemDetail";
import DataLoader from "./components/DataLoader/DataLoader";
import CartContainer from "./components/CartContainer/CartContainer.JSX";

function App() {

  return (
    <BrowserRouter>
      <DataLoader />
      <NavBar />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/pruebas" element={<Pruebas />} />
        <Route path="/carrito" element={<CartContainer />} />
        <Route path="/cursos" element={<CoursesContainer />} />
        <Route path="/cursos/:cursoId" element={<ItemDetail/>} />
        {/* <Route path="*" element={<NotFound />} /> */}
        
      </Routes>
    </BrowserRouter>
  );
}
export default App;
