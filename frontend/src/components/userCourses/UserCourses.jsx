import { useSelector } from "react-redux";
import CourseCard from "../FileCourse/CourseCard/CourseCard";

const UserCourses = () => {

    const courses = useSelector((state) => state.courses.courses);
    const userCoursesId = useSelector((state) => state.userCourses.userCourses);

    const userCourseFilter = courses.filter((course) => userCoursesId.includes(course._id))

    console.log(userCourseFilter)

    return (
        <>
        <div class="m-2"><h2>Mis Cursos</h2></div>
        
        <div>
        {
           <CourseCard courses={userCourseFilter}/>
        }
        </div>
       
        </>
    )
    
}

export default UserCourses;