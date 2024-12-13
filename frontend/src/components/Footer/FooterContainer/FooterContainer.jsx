import { Container, Row, Col, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import FooterLinksContainer from "../FooterLinksContainer/FooterLinksContainer";
import FooterContactContainer from "../FooterContactContainer/FooterContactContainer";
import FooterEmailContainer from "../FooterEmailContainer/FooterEmailContainer";
import FooterSocialContainer from "../FooterSocialContainer/FooterSocialContainer";

const FooterContainer = () => {
  return (
    <Container fluid className="bg-success text-white py-4">
      <Row className="align-items-center">
        {/* Logo a la izquierda */}
        <Col
          md={3}
          className="d-flex flex-column align-items-center justify-content-center justify-content-md-start mb-3 mb-md-0"
        >
          <a
            aria-current="page"
            className="text-white navbar-brand active"
            href="/"
            data-discover="true"
          ></a>

          <h2 className="fs-4 mb-1 text-center">
            &gt;Talentos<span className="text-black"> Academy_</span> By
          </h2>
          <NavLink
            to="/"
            className="d-flex flex-column align-items-center text-decoration-none text-white"
          >
            <Image
              src="/assets/logoHeader-green.png"
              alt="Logo"
              rounded
              className="mb-2"
              style={{ width: "150px", height: "100px" }}
            />
          </NavLink>
        </Col>

        {/* Contenido del footer a la derecha */}
        <Col md={9}>
          <Row>
            <Col md={3}>
              <FooterLinksContainer />
            </Col>
            <Col md={3}>
              <FooterContactContainer />
            </Col>
            <Col md={3}>
              <FooterEmailContainer />
            </Col>
            <Col md={3}>
              <FooterSocialContainer />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default FooterContainer;
