// Third-party components & modules
import { Container, Row, Col } from "react-bootstrap";

// Custom components & modules
import CustomForm from "../Sections/CustomForm";

const Home = () => {
  return (
    <>
      <Container
        fluid
        className="min-vh-100 d-flex flex-column align-items-center"
      >
        <h1 className="text-primary fw-bold mt-5 mb-5">
          Lingo{" "}
          <span className="text-light bg-primary py-2 px-3 rounded">Bot</span>
        </h1>
        <Row className="w-auto">
          <Col
            lg={6}
            md={6}
            sm={12}
            className="d-flex justify-content-center align-items-center"
          >
            <div className="back-image">
              <img src="./assets/svgs/main_back.svg" alt="" />
            </div>
          </Col>
          <Col lg={6} md={6} sm={12} className="my-5">
            <CustomForm />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
