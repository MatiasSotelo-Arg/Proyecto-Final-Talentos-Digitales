import { useState } from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import CourseCard from "../CourseCard/CourseCard";

const CategoriesList = () => {
  const cursos = useSelector((state) => state.courses.courses);
  const uniqueCategories = [
    ...new Set(cursos.map((course) => course.category)),
  ];

  const [filteredCourses, setFilteredCourses] = useState([]);

  const handleFilterCategory = (category) => {
    const cursoFiltrado = cursos.filter((curso) => curso.category === category);
    setFilteredCourses(cursoFiltrado);
  };

  return (
    <>
    <div>
      <div className="m-2">
      <h2>Categorías</h2>
    </div>

    <div className="row m-3 justify-content-center">
      {uniqueCategories.map((category) => (
        <div className="col-12 col-md-auto m-1" key={category}>
          <Button 
            className="w-100 text-black bg-dark text-white border-0 rounded-0"
            onClick={() => handleFilterCategory(category)}
          >
            {category}
          </Button>
        </div>
      ))}
    </div>
</div>


      <div>
        {filteredCourses.length > 0 ? (
          <CourseCard courses={filteredCourses} />
        ) : (
          <CourseCard courses={cursos} />
        )}
      </div>
    </>
  );
};

export default CategoriesList;
