import React from 'react'

export default function SearchBar({ query, setQuery, placeholder }) {
  return (
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder={placeholder}
      className="w-full border rounded px-3 py-2 mb-4 bg-white shadow-lg rounded px-6 py-5 mb-6 border border-gray-200"
    />
  )
}
