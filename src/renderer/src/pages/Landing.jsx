import React from 'react'
import { Link } from 'react-router-dom'
import backgroundImage from '../assets/background.jpg'

export default function Landing() {
  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center text-white">
      <div className="bg-black bg-opacity-60 backdrop-blur-md p-10 rounded-xl text-center max-w-xl mx-4">
        <h1 className="text-4xl font-bold mb-4 tracking-wide">Welcome to YatraTrack</h1>
        <p className="text-lg mb-6 text-gray-200">
          Simplify your journey with HCI-focused driving school management app.
        </p>

        <ul className="text-sm text-left list-disc list-inside mb-6 text-gray-300">
          <li>Book & manage driving lessons</li>
          <li>Track student progress</li>
          <li>Instructor assignment & reporting</li>
          <li>Modern UI with a Nepali soul</li>
        </ul>

        <Link
          to="/dashboard"
          className="inline-block bg-blue-600 hover:bg-blue-700 transition px-6 py-2 rounded text-white font-medium shadow-md"
        >
          Enter App
        </Link>
      </div>
    </div>
  )
}
