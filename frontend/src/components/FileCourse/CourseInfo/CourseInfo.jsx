import { Button, Col, Form, Row } from "react-bootstrap"

import CourseInfoDescription from "./CourseInfoDescription/CourseInfoDescription";
import CourseInfoLike from "./CourseInfoLike/CourseInfoLike";
import CourseInfoComments from "./CourseInfoComments/CourseInfoComments";

const CourseInfo = ({cursoFiltrado,courseAdquired}) => {

  

  return (
    <Row className="text-start">
        <Col md={12}>
            {/* Calificar */}
            <CourseInfoLike courseAdquired={courseAdquired} cursoFiltrado={cursoFiltrado}/>
            
            {/* Descripcion */}
            <CourseInfoDescription cursoFiltrado={cursoFiltrado}/>

            {/* Comentarios */}
            <CourseInfoComments courseAdquired={courseAdquired}/>
        </Col>
      </Row>
  )
}

export default CourseInfo