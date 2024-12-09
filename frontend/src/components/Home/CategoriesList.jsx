import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useSelector, useDispatch } from "react-redux";
import { getCourses } from "../../redux/coursesSlice";

const CategoriesList = () => {
  // const [categories, setCategories] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //     const getCategories = async() => {
  //         const data = await fetchCourse();
  //         setCategories(data);
  //         setLoading(false)
  //     }

  //     getCategories();
  // }, []);

  const { data, loading, error } = useFetch(
    import.meta.env.VITE_API_URL + "api/courses"
  );

  if (error) return <p>Error: {error.message}</p>;

  const courses = useSelector((state) => state.courses);

  const dispatch = useDispatch();

  dispatch(getCourses(data));
  console.log("Redux: ", courses);
  if (loading) return <p>Recibiendo las categorias...</p>;

  return (
    <>
      {courses &&
        courses.map((course) => (
          <div key={course?._id}>{course?.category}</div>
        ))}
    </>
  );
};

export default CategoriesList;
