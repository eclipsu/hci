import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-blue-700 text-white px-6 py-3 shadow-md sticky top-0 z-50">
      <div className="flex items-center justify-between">
        <ul className="flex space-x-6 font-semibold">
          <li>
            <Link to="/" className="hover:underline">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/students" className="hover:underline">
              Students
            </Link>
          </li>
          <li>
            <Link to="/instructors" className="hover:underline">
              Instructors
            </Link>
          </li>
          <li>
            <Link to="/lessons" className="hover:underline">
              Lessons
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
