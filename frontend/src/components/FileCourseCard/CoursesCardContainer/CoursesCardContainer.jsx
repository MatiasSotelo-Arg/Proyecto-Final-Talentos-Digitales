
import CoursesList from '../CoursesCardList/CoursesCardList'

const CoursesCardContainer = () => {

    return (
        <div>
            <div className="text-sm-start font-weight-bold margin mx-5 my-4">
                <h2>Lista de Cursos</h2>
            </div>
            <CoursesList/>
        </div>
    )
}

export default CoursesCardContainer;