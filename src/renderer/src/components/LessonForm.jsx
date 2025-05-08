import React, { useState } from 'react'

const lessonTypes = {
  Introductory: 20,
  Standard: 30,
  'Pass Plus': 40,
  'Driving Test': 50
}

export default function LessonForm({ onAddLesson, students, instructors }) {
  const [lesson, setLesson] = useState({
    studentId: '',
    instructorId: '',
    type: 'Standard',
    duration: 1
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setLesson((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!lesson.studentId || !lesson.instructorId) return

    const cost = lessonTypes[lesson.type] * Number(lesson.duration)
    onAddLesson({ ...lesson, cost, id: Date.now().toString() })

    setLesson({
      studentId: '',
      instructorId: '',
      type: 'Standard',
      duration: 1
    })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-lg rounded px-6 py-5 mb-6 border border-gray-200 space-y-4"
    >
      <div>
        <label className="block mb-1 font-semibold text-gray-700">Student</label>
        <select
          name="studentId"
          value={lesson.studentId}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">Select Student</option>
          {students.map((s) => (
            <option key={s.id} value={s.id}>
              {s.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block mb-1 font-semibold text-gray-700">Instructor</label>
        <select
          name="instructorId"
          value={lesson.instructorId}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">Select Instructor</option>
          {instructors.map((i) => (
            <option key={i.id} value={i.id}>
              {i.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block mb-1 font-semibold text-gray-700">Lesson Type</label>
        <select
          name="type"
          value={lesson.type}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {Object.keys(lessonTypes).map((type) => (
            <option key={type} value={type}>
              {type} (£{lessonTypes[type]}/hr)
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block mb-1 font-semibold text-gray-700">Duration (hours)</label>
        <input
          type="number"
          name="duration"
          min="1"
          max="5"
          value={lesson.duration}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
      >
        Book Lesson
      </button>
    </form>
  )
}
