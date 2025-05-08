import React, { useState } from 'react'

export default function InstructorForm({ onAddInstructor }) {
  const [instructor, setInstructor] = useState({
    name: '',
    email: '',
    phone: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setInstructor((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!instructor.name || !instructor.email || !instructor.phone) return
    onAddInstructor({ ...instructor, id: Date.now().toString() })
    setInstructor({ name: '', email: '', phone: '' })
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-6 py-4 mb-6 space-y-4">
      <div>
        <label className="block mb-1 font-medium">Name</label>
        <input
          type="text"
          name="name"
          value={instructor.name}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          required
        />
      </div>
      <div>
        <label className="block mb-1 font-medium">Email</label>
        <input
          type="email"
          name="email"
          value={instructor.email}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          required
        />
      </div>
      <div>
        <label className="block mb-1 font-medium">Phone</label>
        <input
          type="tel"
          name="phone"
          value={instructor.phone}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          required
        />
      </div>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Add Instructor
      </button>
    </form>
  )
}
