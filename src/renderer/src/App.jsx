import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Students from './pages/Students'
import Instructors from './pages/Instructors'
import Lessons from './pages/Lessons'
import Navbar from './components/Navbar'
import Landing from './pages/Landing'
import backgroundImage from './assets/background.jpg'

export default function App() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${backgroundImage})`
      }}
    >
      <div className="backdrop-brightness-75 min-h-screen">
        <Router>
          <Navbar />
          <div className="p-6 max-w-4xl mx-auto w-full">
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/students" element={<Students />} />
              <Route path="/instructors" element={<Instructors />} />
              <Route path="/lessons" element={<Lessons />} />
            </Routes>
          </div>
        </Router>
      </div>
    </div>
  )
}
