import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import useFetch from "../../hooks/useFetch";
import { getCourses } from "../../redux/coursesSlice";

const CategoriesList = () => {
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

  const uniqueCategories = [...new Set(data.map((course) => course.category))];

  return (
    <ul>
      {/* {data.map((course) => (
        <li key={course._id}>{course.category}</li>
      ))} */}

      {uniqueCategories.map((category) => (
        <li key={category}>{category}</li>
      ))}
    </ul>
  );
};

export default CategoriesList;
