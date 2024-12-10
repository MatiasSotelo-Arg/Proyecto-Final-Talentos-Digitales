import { useSelector } from "react-redux";
import CourseCard from "../CourseCard/CourseCard";

const UserCourses = () => {

    const courses = useSelector((state) => state.courses.courses);
    const userCoursesId = useSelector((state) => state.userCourses.userCourses);

    const userCourseFilter = courses.filter((course) => userCoursesId.includes(course._id))

    console.log(userCourseFilter)

    return (
        <>
        {
           <CourseCard courses={userCourseFilter}/>
        }
        </>
    )
    
}

export default UserCourses;