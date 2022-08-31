// Third-party components & modules
import { Routes, Route, useLocation } from 'react-router-dom'

// Custom components & modules
import Home from './Components/Pages/Home'
import Dashboard from './Components/Pages/Dashboard'

// Third-party styling
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App
