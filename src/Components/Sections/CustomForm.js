// Inbuilt components & modules
import { useState } from 'react'

// Third-party components & modules
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

const CustomForm = () => {
  // Form state
  const [formType, setFormType] = useState(true)

  // Login state
  const [login, setLogin] = useState({
    email: '',
    password: ''
  })

  // Register state
  const [register, setRegister] = useState({
    fullName: '',
    email: '',
    password: ''
  })

  console.log(login)
  console.log(register)

  const loginHandler = () => {
    console.log(login)
  }

  return (
    <>
      <Container>
        <Row>
          <Col className="border border-2 p-5 m-auto rounded">
            <h1 className="text-primary fs-2 mb-4">
              {formType ? 'Login...' : 'Register...'}
            </h1>
            <Form>
              {!formType ? (
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Full name</Form.Label>
                  <Form.Control
                    className="p-2"
                    type="text"
                    placeholder="Full name"
                    onChange={(e) => setRegister({ ...register, 'fullName': e.target.value })}
                  />
                </Form.Group>
              ) : (
                ''
              )}
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  className="p-2"
                  type="email"
                  placeholder="Enter email"
                  onChange={(e) => formType ? setLogin({ ...login, 'email': e.target.value }) : setRegister({ ...register, 'email': e.target.value })}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  className="p-2"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => formType ? setLogin({ ...login, 'password': e.target.value }) : setRegister({ ...register, 'password': e.target.value })}
                />
              </Form.Group>
              <div className="d-grid gap-2">
                <Button variant="primary p-2">
                  {formType ? 'Login' : 'Register'}
                </Button>
                <Button
                  variant="secondary p-2"
                  onClick={() => setFormType(!formType)}
                >
                  {!formType ? 'Login' : 'Register'}
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default CustomForm
