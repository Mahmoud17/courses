import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Course from './components/Course'
import Dashboard from './components/dashboard'
function App() {
  return (
    <Router>
      <nav className="m-3 text-blue-400 underline underline-offset-4">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/dashboard">My Courses</Link>
            </li>
          </ul>
        </nav>

      <h1 className="text-teal-500 text-5xl bg-black-400 m-3">Courses Portal</h1>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/course/:id" element={<Course />} />
      </Routes>

    </Router>
  )
}

export default App
