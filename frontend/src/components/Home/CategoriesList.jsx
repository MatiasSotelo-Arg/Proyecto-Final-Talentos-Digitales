import { useSelector } from "react-redux";

const CategoriesList = () => {
  const data = useSelector((state) => state.courses.courses);
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
