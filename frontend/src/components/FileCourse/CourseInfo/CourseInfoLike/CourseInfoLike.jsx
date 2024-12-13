import { Button } from "react-bootstrap"
import { IoMdHeartEmpty,IoMdHeart  } from "react-icons/io";

const CourseInfoLike = ({courseAdquired,cursoFiltrado}) => {
  return (
    <div className="mb-4">

        {courseAdquired ? <h4>Calificar</h4> : <h4>Calificaciones</h4>}

        <div className="d-flex">
            {courseAdquired ?
                <IoMdHeartEmpty 
                style={{ cursor: "pointer", margin:"auto 5px"}}
                /> : <IoMdHeart />}

            <p style={{margin:"auto 0"}}>{cursoFiltrado.likes} corazones</p>
        </div>
    </div>
  )
}

export default CourseInfoLike