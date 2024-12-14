import { useSelector } from "react-redux";
import CourseCardDetail from "../FileCourseCard/CourseCardDetail/CourseCardDetail";

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
      {userCourseFilter && (
        <div>{<CourseCardDetail courses={userCourseFilter} />}</div>
      )}
    </>
  );
};

export default UserCourses;
