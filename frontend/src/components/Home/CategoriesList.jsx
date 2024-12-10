import { useState } from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";

const CategoriesList = () => {
  const cursos = useSelector((state) => state.courses.courses);
  const uniqueCategories = [...new Set(cursos.map((course) => course.category))];

  
  const [filteredCourses, setFilteredCourses] = useState([]);

  const handleFilterCategory = (category) => {
    const cursoFiltrado = cursos.filter(curso => curso.category === category);
    setFilteredCourses(cursoFiltrado)
  }

  return (
    <>

    <div className="mt-3">
      <h2>Categorías</h2>
      {uniqueCategories.map((category) => (
        <Button className="m-1" key={category._id} onClick={() => handleFilterCategory(category)}>{category}</Button>
      ))}
    </div>
    

    <div>
      {filteredCourses.length > 0 ? (
        filteredCourses.map((curso) => (
          <p key={curso.id}>{curso.name}</p>
        ))
      ) : (
        cursos.map((curso) => (
          <p key={curso.id}>{curso.name}</p>
        ))
      )}
    </div>


    </>
  );
};

export default CategoriesList;
