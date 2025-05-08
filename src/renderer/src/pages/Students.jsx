import React, { useState, useEffect } from 'react'
import StudentForm from '../components/StudentForm'
import SearchBar from '../components/SearchBar'
import { saveToStorage, loadFromStorage } from '../utils/storage'

export default function Students() {
  const [students, setStudents] = useState([])
  const [query, setQuery] = useState('')

  // Load students from localStorage on first render
  useEffect(() => {
    const storedStudents = loadFromStorage('students')
    setStudents(storedStudents)
  }, [])

  // Save students to localStorage whenever the state changes
  useEffect(() => {
    saveToStorage('students', students)
  }, [students])

  const handleAddStudent = (student) => {
    setStudents((prev) => [...prev, student])
  }

  const filtered = students.filter((s) =>
    `${s.name} ${s.email}`.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-white">Students</h2>

      <StudentForm onAddStudent={handleAddStudent} />

      <SearchBar
        query={query}
        setQuery={setQuery}
        placeholder="Search students by name or email..."
      />

      <h3 className="text-xl font-semibold mb-2 text-white">Registered Students</h3>

      {filtered.length === 0 ? (
        <p className="text-white">No students found.</p>
      ) : (
        <ul className="space-y-3">
          {filtered.map((s) => (
            <li key={s.id} className="border p-4 rounded shadow-sm bg-white">
              <p className="font-bold">{s.name}</p>
              <p className="text-sm text-gray-600">{s.email}</p>
              <p className="text-sm text-gray-600">{s.phone}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
