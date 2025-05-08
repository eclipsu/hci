import React, { useState, useEffect } from 'react'
import LessonForm from '../components/LessonForm'
import SearchBar from '../components/SearchBar'
import { saveToStorage, loadFromStorage } from '../utils/storage'

export default function Lessons() {
  const [lessons, setLessons] = useState([])
  const [query, setQuery] = useState('')

  // Load students and instructors from localStorage
  const students = loadFromStorage('students')
  const instructors = loadFromStorage('instructors')

  // Load lessons on mount
  useEffect(() => {
    setLessons(loadFromStorage('lessons'))
  }, [])

  // Save lessons when changed
  useEffect(() => {
    saveToStorage('lessons', lessons)
  }, [lessons])

  const handleAddLesson = (lesson) => {
    setLessons((prev) => [...prev, lesson])
  }

  const filtered = lessons.filter((l) => {
    const student = students.find((s) => s.id === l.studentId)?.name || ''
    const instructor = instructors.find((i) => i.id === l.instructorId)?.name || ''
    return `${student} ${instructor} ${l.type}`.toLowerCase().includes(query.toLowerCase())
  })

  const totalRevenue = lessons.reduce((sum, l) => sum + l.cost, 0)

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-gray-800 text-white">Book a Lesson</h2>

      <LessonForm onAddLesson={handleAddLesson} students={students} instructors={instructors} />

      <SearchBar
        query={query}
        setQuery={setQuery}
        placeholder="Search by student, instructor, or lesson type..."
      />

      <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-700 text-white">Booked Lessons</h3>

      {filtered.length === 0 ? (
        <p className="text-gray-500 text-white">No lessons found.</p>
      ) : (
        <ul className="space-y-3">
          {filtered.map((l) => (
            <li
              key={l.id}
              className="border p-4 rounded shadow-sm bg-white hover:shadow-md transition"
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-bold text-lg">
                    {l.type} ({l.duration}h)
                  </p>
                  <p className="text-sm text-gray-600">
                    Student: {students.find((s) => s.id === l.studentId)?.name}
                  </p>
                  <p className="text-sm text-gray-600">
                    Instructor: {instructors.find((i) => i.id === l.instructorId)?.name}
                  </p>
                </div>
                <div className="text-green-600 font-bold text-lg">£{l.cost}</div>
              </div>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-6 text-sm text-gray-600 border-t pt-4 text-white">
        <p>Total Lessons: {lessons.length}</p>
        <p>Total Revenue: £{totalRevenue}</p>
      </div>
    </div>
  )
}
