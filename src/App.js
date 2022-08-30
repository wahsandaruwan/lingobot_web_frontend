// Third-party components & modules
import { Container } from 'react-bootstrap'

// Custom components & modules
import LoginForm from './Components/Sections/LoginForm'

// Third-party styling
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <>
      <Container
        fluid
        className="min-vh-100 d-flex  flex-column align-items-center"
      >
        <h1 className="text-primary fw-bold mt-5 mb-5">
          LAnG <span className="text-light bg-primary p-3">LEaRN</span>
        </h1>
        <LoginForm />
      </Container>
    </>
  )
}

export default App
