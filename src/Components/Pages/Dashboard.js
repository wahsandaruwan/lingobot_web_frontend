// Inbuilt components & modules
import { useState, useEffect } from "react";

// Third-party components & modules
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import ChatInterface from "../Sections/ChatInterface";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Custom components & modules
import { getUserFromLocal } from "../../helpers/LocalStorageHandling";

const Dashboard = () => {
  // Chat display state
  const [showChat, setShowChat] = useState(false);

  // Language state
  const [language, setLanguage] = useState("english");

  // Navigation instance
  let navigate = useNavigate();

  useEffect(() => {
    // Fetch all points
    languagePointsHandler();
    // Redirect to home if user not logged in
    if (!getUserFromLocal()?.authentication) {
      navigate("/");
    }
  }, []);

  // Function for logout
  const logoutHandler = () => {
    localStorage.clear();
    window.location.reload(true);
  };

  // Function for get all points for user
  const languagePointsHandler = async () => {
    try {
      // Api call
      const { data } = await axios.get(
        `https://lingobot-backend.onrender.com/api/points/get/all/${
          getUserFromLocal()?.id
        }`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getUserFromLocal()?.token}`,
          },
        }
      );

      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Container>
        <Row className="mt-3">
          <Col>
            <Card className="text-center">
              <Card.Body>
                <Card.Title className="fw-bold" as="h3">
                  Welcome to the Lingobot Dashboard.
                </Card.Title>
                <Card.Text>
                  You can select any language given below, and learn it by
                  chatting with our AI powered bot.
                </Card.Text>
                <Button variant="primary py-2 px-5" onClick={logoutHandler}>
                  Logout
                </Button>
              </Card.Body>
              <Card.Footer className="text-muted">
                Logged in as {getUserFromLocal().fullName}
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        {!showChat ? (
          <Row className="my-3 gx-3 gy-3">
            <Col lg={3} md={4} xs={12}>
              <Card className="text-center">
                <Card.Img
                  variant="top w-50 m-auto"
                  src="./assets/svgs/uk-flag.svg"
                />
                <Card.Body>
                  <Card.Title>English</Card.Title>
                  <Card.Text>Your Score : 50</Card.Text>
                  <Button
                    variant="primary py-2 px-5"
                    onClick={() => {
                      setLanguage("English");
                      setShowChat(true);
                    }}
                  >
                    Start Learning
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} md={4} xs={12}>
              <Card className="text-center">
                <Card.Img
                  variant="top w-50 m-auto"
                  src="./assets/svgs/spain-flag.svg"
                />
                <Card.Body>
                  <Card.Title>Spanish</Card.Title>
                  <Card.Text>Your Score : 60</Card.Text>
                  <Button
                    variant="primary py-2 px-5"
                    onClick={() => {
                      setLanguage("Spanish");
                      setShowChat(true);
                    }}
                  >
                    Start Learning
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} md={4} xs={12}>
              <Card className="text-center">
                <Card.Img
                  variant="top w-50 m-auto"
                  src="./assets/svgs/germany-flag.svg"
                />
                <Card.Body>
                  <Card.Title>German</Card.Title>
                  <Card.Text>Your Score : 80</Card.Text>
                  <Button
                    variant="primary py-2 px-5"
                    onClick={() => {
                      setLanguage("German");
                      setShowChat(true);
                    }}
                  >
                    Start Learning
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} md={4} xs={12}>
              <Card className="text-center">
                <Card.Img
                  variant="top w-50 m-auto"
                  src="./assets/svgs/france-flag.svg"
                />
                <Card.Body>
                  <Card.Title>French</Card.Title>
                  <Card.Text>Your Score : 30</Card.Text>
                  <Button
                    variant="primary py-2 px-5"
                    onClick={() => {
                      setLanguage("French");
                      setShowChat(true);
                    }}
                  >
                    Start Learning
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} md={4} xs={12}>
              <Card className="text-center">
                <Card.Img
                  variant="top w-50 m-auto"
                  src="./assets/svgs/russian-flag.svg"
                />
                <Card.Body>
                  <Card.Title>Russian</Card.Title>
                  <Card.Text>Your Score : 40</Card.Text>
                  <Button
                    variant="primary py-2 px-5"
                    onClick={() => {
                      setLanguage("Russian");
                      setShowChat(true);
                    }}
                  >
                    Start Learning
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} md={4} xs={12}>
              <Card className="text-center">
                <Card.Img
                  variant="top w-50 m-auto"
                  src="./assets/svgs/china-flag.svg"
                />
                <Card.Body>
                  <Card.Title>Mandarin</Card.Title>
                  <Card.Text>Your Score : 50</Card.Text>
                  <Button
                    variant="primary py-2 px-5"
                    onClick={() => {
                      setLanguage("Mandarin");
                      setShowChat(true);
                    }}
                  >
                    Start Learning
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        ) : (
          <ChatInterface
            language={language}
            hideChat={() => setShowChat(false)}
          />
        )}
        {/* <ChatInterface /> */}
      </Container>
    </>
  );
};

export default Dashboard;
