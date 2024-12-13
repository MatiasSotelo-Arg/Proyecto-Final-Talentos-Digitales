import { useSelector } from "react-redux";
import CourseCardDetail from "../FileCourseCard/CourseCardDetail/CourseCardDetail";

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
           <CourseCardDetail courses={userCourseFilter}/>
        }
        </div>
       
        </>
    )
    
}

export default UserCourses;