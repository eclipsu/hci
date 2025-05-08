import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Students from './pages/Students'
import Instructors from './pages/Instructors'
import Lessons from './pages/Lessons'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="p-6 flex-1">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/students" element={<Students />} />
            <Route path="/instructors" element={<Instructors />} />
            <Route path="/lessons" element={<Lessons />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}
