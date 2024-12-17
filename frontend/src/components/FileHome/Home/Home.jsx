import CategoriesList from "../CategoriesList/CategoriesList";
import Carousel from "../../FileCourse/CourseCarousel/CourseCarousel";
import { Container, Row } from "react-bootstrap";

const Home = () => {
  return (
    <Container>
      <Row className="my-3">
        <Carousel />
      </Row>
      <Row className="my-5">
        <CategoriesList />
      </Row>
    </Container>
  );
};

export default Home;
