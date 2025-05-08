import React, { useState } from 'react'

export default function StudentForm({ onAddStudent }) {
  const [student, setStudent] = useState({
    name: '',
    email: '',
    phone: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setStudent((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!student.name || !student.email || !student.phone) return
    onAddStudent({ ...student, id: Date.now().toString() })
    setStudent({ name: '', email: '', phone: '' })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-lg rounded px-6 py-5 mb-6 border border-gray-200 space-y-4"
    >
      <div>
        <label className="block mb-1 font-semibold text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          value={student.name}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label className="block mb-1 font-semibold text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={student.email}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label className="block mb-1 font-semibold text-gray-700">Phone</label>
        <input
          type="tel"
          name="phone"
          value={student.phone}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Add Student
      </button>
    </form>
  )
}
