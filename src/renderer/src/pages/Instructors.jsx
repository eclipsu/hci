import React, { useState } from 'react'
import InstructorForm from '../components/InstructorForm'
import SearchBar from '../components/SearchBar'

export default function Instructors() {
  const [instructors, setInstructors] = useState([])
  const [query, setQuery] = useState('')

  const handleAddInstructor = (instructor) => {
    setInstructors((prev) => [...prev, instructor])
  }

  const filtered = instructors.filter((i) =>
    `${i.name} ${i.email}`.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-white">Instructors</h2>
      <InstructorForm onAddInstructor={handleAddInstructor} />

      <SearchBar
        query={query}
        setQuery={setQuery}
        placeholder="Search instructors by name or email..."
      />

      <h3 className="text-xl font-semibold mb-2 text-white">Registered Instructors</h3>
      <ul className="space-y-3">
        {filtered.map((i) => (
          <li key={i.id} className="border p-4 rounded shadow-sm">
            <p className="font-bold">{i.name}</p>
            <p className="text-sm text-gray-600">{i.email}</p>
            <p className="text-sm text-gray-600">{i.phone}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
