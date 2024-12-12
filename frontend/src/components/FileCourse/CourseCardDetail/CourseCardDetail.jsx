import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

import "./CourseCardDetail.css";

const CourseCard = ({ courses }) => {
  return (
    <div className="m-4 row d-flex justify-content-center">
      {courses.map((item) => (
        // <div key={item._id} className="item-card col-sm-3 mx-2 my-3">
        //   <img src={item.image} alt={item.name} />
        //   <h3>{item.name}</h3>
        //   <Link to={`/cursos/${item._id}`}>ver mas</Link>
        // </div>

        // style={{ width: '265px' }}
        <Card
          key={item._id}
          className="p-0 m-2 border-0 sensitive-width "
          style={{ maxWidth: "265px" }}
        >
          <Card.Img
            variant="top"
            src={item.image}
            className="rounded-0"
            style={{ height: "148px" }}
          />

          <Card.Body className="border-0 text-start sensitive-width">
            <Card.Title>{item.name}</Card.Title>
            <Button
              variant="primary"
              className="bg-success border-0 border-white rounded-0"
            >
              <Link
                to={`/cursos/${item._id}`}
                className="text-white text-decoration-none"
              >
                ver mas
              </Link>
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default CourseCard;
