// Inbuilt components & modules
import { useState } from 'react'

// Third-party components & modules
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import ChatInterface from '../Sections/ChatInterface'

const Dashboard = () => {
  // Chat display state
  const [showChat, setShowChat] = useState(false)

  return (
    <>
      <Container>
        <Row className="mt-3">
          <Col>
            <Card className="text-center">
              <Card.Body>
                <Card.Title className="fw-bold" as="h3">
                  Welcome to the Lang Learn Dashboard.
                </Card.Title>
                <Card.Text>
                  You can select any language given below, and learn it by
                  chatting with our AI powered bot.
                </Card.Text>
                <Button variant="primary py-2 px-5">Logout</Button>
              </Card.Body>
              <Card.Footer className="text-muted">
                Logged in as Kamal
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        {
          !showChat ? <Row className="my-3 gx-3 gy-3">
            <Col lg={3} md={4} xs={12}>
              <Card className="text-center">
                <Card.Img
                  variant="top w-50 m-auto"
                  src="./assets/svgs/uk-flag.svg"
                />
                <Card.Body>
                  <Card.Title>English</Card.Title>
                  <Card.Text>Your Score : 50</Card.Text>
                  <Button variant="primary py-2 px-5" onClick={() => setShowChat(true)}>Start Learning</Button>
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
                  <Button variant="primary py-2 px-5" onClick={() => setShowChat(true)}>Start Learning</Button>
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
                  <Button variant="primary py-2 px-5" onClick={() => setShowChat(true)}>Start Learning</Button>
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
                  <Button variant="primary py-2 px-5" onClick={() => setShowChat(true)}>Start Learning</Button>
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
                  <Button variant="primary py-2 px-5" onClick={() => setShowChat(true)}>Start Learning</Button>
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
                  <Button variant="primary py-2 px-5" onClick={() => setShowChat(true)}>Start Learning</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row> : <ChatInterface hideChat={() => setShowChat(false)} />
        }
        {/* <ChatInterface /> */}
      </Container>
    </>
  )
}

export default Dashboard