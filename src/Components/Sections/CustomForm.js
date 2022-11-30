// Inbuilt components & modules
import { useState, useEffect } from "react";

// Third-party components & modules
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Custom components & modules
import {
  setUserToLocal,
  getUserFromLocal,
} from "../../helpers/LocalStorageHandling";

const CustomForm = () => {
  // Form state
  const [formType, setFormType] = useState(true);

  // Login state
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  // Register state
  const [register, setRegister] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  // Error state
  const [error, setError] = useState("");

  // Success state
  const [success, setSuccess] = useState("");

  // Navigation instance
  let navigate = useNavigate();

  // Redirect to dashboard if user logged in
  useEffect(() => {
    if (getUserFromLocal()?.authentication) {
      navigate("/dashboard");
    }
  }, []);

  // Function for handling login
  const loginHandler = async () => {
    const { email, password } = login;
    // Api call
    try {
      if (email === "") {
        setError("Enter email!");
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
        setError("Enter proper email!");
      } else if (password === "") {
        setError("Enter password!");
      } else {
        const { data } = await axios.post(
          `http://localhost:3300/api/users/login`,
          {
            email: email,
            password: password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (data.authentication) {
          setError("");
          // Clear local storage
          localStorage.clear();
          // Save login data in local storage and navigate to dashboard
          setUserToLocal(data);
          navigate("/dashboard");
        } else {
          throw Error(data.errors.message);
        }
      }
    } catch (err) {
      console.log(err);
      setSuccess("");
      setError(err.message);
    }
  };

  // Function for handling registration
  const registrationHandler = async () => {
    console.log(register);
    const { fullName, email, password } = register;
    if (fullName === "") {
      setError("Enter email!");
    } else if (email === "") {
      setError("Enter password!");
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      setError("Enter proper email!");
    } else if (password === "") {
      setError("Enter password!");
    } else {
      try {
        // Api call
        const { data } = await axios.post(
          `http://localhost:3300/api/users/register`,
          register,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (data.created) {
          setError("");
          setSuccess(data.success.message);
        } else {
          throw Error(data.errors.message);
        }
      } catch (err) {
        console.log(err);
        setSuccess("");
        setError(err.message);
      }
    }
  };

  return (
    <>
      <Container>
        <Row>
          <Col className="border border-2 p-5 m-auto rounded">
            <h1 className="text-primary fs-2 mb-4">
              {formType ? "Login..." : "Register..."}
            </h1>
            <Form>
              {error && (
                <Card className="mb-3 bg-danger text-light">
                  <Card.Body>{error}</Card.Body>
                </Card>
              )}
              {success && (
                <Card className="mb-3 bg-success text-light">
                  <Card.Body>{success}</Card.Body>
                </Card>
              )}
              {!formType ? (
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Full name</Form.Label>
                  <Form.Control
                    className="p-2"
                    type="text"
                    placeholder="Full name"
                    onChange={(e) =>
                      setRegister({ ...register, fullName: e.target.value })
                    }
                  />
                </Form.Group>
              ) : (
                ""
              )}
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  className="p-2"
                  type="email"
                  placeholder="Enter email"
                  onChange={(e) =>
                    formType
                      ? setLogin({ ...login, email: e.target.value })
                      : setRegister({ ...register, email: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  className="p-2"
                  type="password"
                  placeholder="Password"
                  onChange={(e) =>
                    formType
                      ? setLogin({ ...login, password: e.target.value })
                      : setRegister({ ...register, password: e.target.value })
                  }
                />
              </Form.Group>
              <div className="d-grid gap-2">
                <Button
                  variant="primary p-2"
                  onClick={formType ? loginHandler : registrationHandler}
                >
                  {formType ? "Login" : "Register"}
                </Button>
                <Button
                  variant="secondary p-2"
                  onClick={() => {
                    setFormType(!formType);
                    if (formType === false) {
                      window.location.reload(true);
                    }
                  }}
                >
                  {!formType ? "Login" : "Register"}
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CustomForm;
