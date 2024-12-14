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


          {courseAdquired && (
            <div className="mb-4">
              <h4>Agregar un comentario</h4>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Escriba su comentario..."
              />
              <Button variant="primary" className="w-10 mt-2" onClick>
                Agregar Comentario
              </Button>
            </div>
          )}

           {/* Comentarios */}
           <CourseInfoComments/>
        </Col>
      </Row>
  )
}

export default CourseInfo