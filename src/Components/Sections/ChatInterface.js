// Third-party components & modules
import { Row, Col, Card, Button } from 'react-bootstrap'
import { BsFillArrowRightSquareFill } from 'react-icons/bs'

const ChatInterface = ({ hideChat }) => {
  return (
    <>
      <Row className="my-3">
        <Col>
          <Card>
            <Card.Header className="d-flex flex-row justify-content-between align-items-center p-3">
              <Card.Title as="h5">Learn English</Card.Title>
              <div className="d-grid gap-2 d-flex">
                <Card.Text className="bg-warning text-dark px-3 py-2 mb-0 rounded fs6">
                  50
                </Card.Text>
                <Button variant="primary py-2 px-3" onClick={hideChat}>Go Back</Button>
              </div>
            </Card.Header>
            <Card.Body className="chat-body overflow-auto">
              <div className="w-auto m-auto p-2 mb-4 rounded">
                <p className="text-center mx-3 mb-0 text-muted">
                  Today, Messages
                </p>
              </div>
              <div className="d-flex flex-row justify-content-start">
                <img src="./assets/svgs/bot.svg" className="avatar-image" />
                <div>
                  <p className="bg-secondary text-light small p-2 ms-3 mb-1 rounded-3">
                    Hi
                  </p>
                  <p className="bg-secondary text-light small p-2 ms-3 mb-1 rounded-3">
                    I am John.
                  </p>
                  <p className="bg-secondary text-light small p-2 ms-3 mb-1 rounded-3">
                    I will help you to learn English in a more interactive way.
                  </p>
                  <p className="small ms-3 mb-3 rounded-3 text-muted">23:58</p>
                </div>
              </div>
              <div className="d-flex flex-row justify-content-end mb-4 pt-1">
                <div>
                  <p className="bg-primary small p-2 me-3 mb-1 text-white rounded-3">
                    Hi, I am Kamal.
                  </p>
                  <p className="bg-primary small p-2 me-3 mb-1 text-white rounded-3">
                    Glad to hear that.
                  </p>
                  <p className="small me-3 mb-3 rounded-3 text-muted d-flex justify-content-end">
                    00:10
                  </p>
                </div>
                <img src="./assets/svgs/user.svg" className="avatar-image" />
              </div>
            </Card.Body>
            <Card.Footer className="d-flex px-3 py-4">
              <input
                type="text"
                className="form-control form-control-lg fs-6 py-3"
                id="exampleFormControlInput1"
                placeholder="Type your message..."
              />
              <a className="btn-send ms-3" href="#!">
                <BsFillArrowRightSquareFill />
              </a>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default ChatInterface
