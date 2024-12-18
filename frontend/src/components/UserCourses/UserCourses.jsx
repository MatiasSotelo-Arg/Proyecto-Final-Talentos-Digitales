import { useSelector } from "react-redux";
import CourseCardDetail from "../FileCourseCard/CourseCardDetail/CourseCardDetail";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const UserCourses = () => {
  const courses = useSelector((state) => state.courses.courses);
  const user = useSelector((state) => state.user);
  console.log(user);

  const userCourseFilter =
    user &&
    courses &&
    courses.filter((course) => user.myCourses.includes(course._id));

  return (
    <>
      <div className="m-2">
        <h2>Mis Cursos</h2>
      </div>
      {userCourseFilter && userCourseFilter.length > 0 ? (
        <div>{<CourseCardDetail courses={userCourseFilter} />}</div>
      ) : (
        <>
          <h3>Aún no tienes cursos</h3>
          <Button
            variant="success"
            className="text-white btn-lg px-4 py-2"
            style={{ fontSize: "1.25rem" }}
          >
            <Link className="text-decoration-none text-dark w-100" to="/cursos">
              Ver Cursos
            </Link>
          </Button>
        </>
      )}
    </>
  );
};

export default UserCourses;
