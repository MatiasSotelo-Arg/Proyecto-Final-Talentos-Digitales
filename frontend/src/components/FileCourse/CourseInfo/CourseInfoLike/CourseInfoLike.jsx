import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";

const CourseInfoLike = ({courseAdquired,cursoFiltrado}) => {

  const [likes, setLikes] = useState(10);
  const [likeBool, setLikeBool] = useState(false);
  const [color, setColor] = useState("black");

  const handleLike = () => {!likeBool ? modifyChanges(likes,+1,true,"red") : modifyChanges(likes,-1,false,"black")};

  const modifyChanges = (likes,operacion,bool,color) => {
    setLikes(likes + operacion);
    setLikeBool(bool) 
    setColor(color)
  }

  return (
    <div className="mb-4">

        {courseAdquired ? <h4>Calificar</h4> : <h4>Calificaciones</h4>}

        <div className="d-flex">
            {courseAdquired ?
                // <IoMdHeartEmpty 
                // style={{  color: color}}
                // onClick={handleLike}
                // /> : <IoMdHeart />}
                <FaHeart style={{ color: color, cursor: "pointer", margin:"auto 5px" }}  onClick={handleLike}/>
                :
                <IoMdHeart /> }
            <p style={{cursor: "pointer", margin:"auto 5px"}}>{likes} corazones</p>
        </div>
    </div>
  )
}

export default CourseInfoLike