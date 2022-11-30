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

  // Points instances state
  const [pointsInstances, setPointsInstances] = useState([]);

  // Current anguage state
  const [currentLanguage, setCurrentLanguage] = useState("english");

  // Current points state
  const [currentPoints, setCurrentPoints] = useState(0);

  // Languages
  const languages = [
    "English",
    "Spanish",
    "German",
    "French",
    "Russian",
    "Mandarin",
  ];

  // Navigation instance
  let navigate = useNavigate();

  useEffect(() => {
    // Redirect to home if user not logged in
    if (!getUserFromLocal()?.authentication) {
      navigate("/");
    }
    // Fetch all points
    languagePointsHandler();
  }, [showChat]);

  useEffect(() => {
    startCreatingPointsInstances();
  }, [pointsInstances]);

  // Function for logout
  const logoutHandler = () => {
    localStorage.clear();
    window.location.reload(true);
  };

  // Function for start creating points instances
  const startCreatingPointsInstances = async () => {
    if (pointsInstances.length === 0) {
      console.log(pointsInstances);
      // Create point instances for each language
      languages.forEach(async (item) => {
        await createPointInstances(getUserFromLocal()?.id, item);
      });
    }
  };

  // Function for get all points for user
  const languagePointsHandler = async () => {
    try {
      // Api call
      const { data } = await axios.get(
        `http://localhost:3300/api/points/all/get/${getUserFromLocal()?.id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (data.length > 0) {
        setPointsInstances(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  console.log(pointsInstances);

  // Function for creating point instances for registered users
  const createPointInstances = async (userId, language) => {
    console.log(language);
    try {
      // Api call
      const { data } = await axios.post(
        `http://localhost:3300/api/points/create`,
        {
          userId,
          language,
          points: 0,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(data);
    } catch (err) {
      console.log(err);
    } finally {
      languagePointsHandler();
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
            {pointsInstances?.map((item, index) => {
              const { language, points } = item;
              return (
                <Col lg={3} md={4} xs={12} key={index}>
                  <Card className="text-center">
                    {language === "English" ? (
                      <Card.Img
                        variant="top w-50 m-auto"
                        src="./assets/svgs/uk-flag.svg"
                      />
                    ) : null}
                    {language === "Spanish" ? (
                      <Card.Img
                        variant="top w-50 m-auto"
                        src="./assets/svgs/spain-flag.svg"
                      />
                    ) : null}
                    {language === "Russian" ? (
                      <Card.Img
                        variant="top w-50 m-auto"
                        src="./assets/svgs/russian-flag.svg"
                      />
                    ) : null}
                    {language === "German" ? (
                      <Card.Img
                        variant="top w-50 m-auto"
                        src="./assets/svgs/germany-flag.svg"
                      />
                    ) : null}
                    {language === "French" ? (
                      <Card.Img
                        variant="top w-50 m-auto"
                        src="./assets/svgs/france-flag.svg"
                      />
                    ) : null}
                    {language === "Mandarin" ? (
                      <Card.Img
                        variant="top w-50 m-auto"
                        src="./assets/svgs/china-flag.svg"
                      />
                    ) : null}
                    <Card.Body>
                      <Card.Title>{language}</Card.Title>
                      <Card.Text>Your Score : {points}</Card.Text>
                      <Button
                        variant="primary py-2 px-5"
                        onClick={() => {
                          setCurrentPoints(points);
                          setCurrentLanguage(language);
                          setShowChat(true);
                        }}
                      >
                        Start Learning
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        ) : (
          <ChatInterface
            currentLanguage={currentLanguage}
            currentPoints={currentPoints}
            hideChat={() => setShowChat(false)}
          />
        )}
        {/* <ChatInterface /> */}
      </Container>
    </>
  );
};

export default Dashboard;
