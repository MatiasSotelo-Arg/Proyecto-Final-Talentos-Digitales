import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "react-bootstrap/Card";
import "./CourseCarousel.css";

function CarouselFadeExample() {
  // const courses = useSelector((state) => state.courses.courses);
  // const idCourses = [];
  const url =
    " https://yt3.googleusercontent.com/bDisn8rCsbvMyZPmrlVO_C20TdWzagUXjRV71AHfnFsNS5WU6rp1nIQRzF_y7zSWCtSBZehY=s160-c-k-c0x00ffffff-no-rj";
  const cardData = [
    {
      title: "React Course",
      text: "Learn the basics of React.js and build amazing web apps.",
      imgUrl: url,
    },
    {
      title: "Node.js Course",
      text: "Master backend development with Node.js and Express.",
      imgUrl: url,
    },
    {
      title: "MongoDB Course",
      text: "Get started with NoSQL databases using MongoDB.",
      imgUrl: url,
    },
    {
      title: "JavaScript Course",
      text: "Deep dive into JavaScript, the language of the web.",
      imgUrl: url,
    },
    {
      title: "HTML & CSS Course",
      text: "Build stunning web pages with HTML and CSS.",
      imgUrl: url,
    },
    {
      title: "TypeScript Course",
      text: "Learn TypeScript for scalable web development.",
      imgUrl: url,
    },
  ];

  // Configuración del carousel
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="carousel-container">
      <Carousel
        responsive={responsive}
        infinite={true} // Hace el carousel cíclico
        // Reproduce automáticamente
        autoPlaySpeed={2000} // Velocidad de reproducción en ms
        keyBoardControl={true} // Permite control por teclado
        showDots={true} // Muestra los indicadores (dots)
        customTransition="transform 500ms ease-in-out"
        transitionDuration={500} // Duración de la transición
      >
        {cardData.map((card, index) => (
          <div key={index} className="d-flex justify-content-center">
            <Card style={{ width: "18rem", margin: "10px", height: "10rem" }}>
              <Card.Img
                style={{ width: "100%", height: "7rem" }}
                variant="top"
                src={card.imgUrl}
              />
              <Card.Body
                style={{ width: "100%", height: "3rem", overflow: "hidden" }}
              >
                <Card.Title
                  style={{ width: "6rem", height: "2rem", overflow: "hidden" }}
                >
                  {card.title}
                </Card.Title>
                <Card.Text
                  style={{ width: "6rem", height: "1rem", overflow: "hidden" }}
                >
                  {card.text}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselFadeExample;
