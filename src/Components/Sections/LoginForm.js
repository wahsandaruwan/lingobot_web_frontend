// Third-party components & modules
import { Col, Container, Row, Form, Button } from 'react-bootstrap'

const LoginForm = () => {
  return (
    <>
      <Container>
        <Row>
          <Col
            lg={4}
            md={8}
            sm={12}
            className="border border-2 p-5 m-auto rounded-lg"
          >
            <h1 className="text-primary fs-2 mb-4">Login...</h1>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  className="p-2"
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  className="p-2"
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
              <div className="d-grid gap-2">
                <Button variant="primary p-2">Login</Button>
                <Button variant="secondary p-2">Register</Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default LoginForm
