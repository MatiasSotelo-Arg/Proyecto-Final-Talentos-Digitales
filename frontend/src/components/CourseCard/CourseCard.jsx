import { Link } from "react-router-dom";

const CourseCard = ({ courses }) => {
  return (
    <div className="items-grid m-4">
      {courses.map((item) => (
        <div key={item._id} className="item-card">
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <Link to={`/cursos/${item._id}`}>ver mas</Link>
        </div>
      ))}
    </div>
  );
};

export default CourseCard;
