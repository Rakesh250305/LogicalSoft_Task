import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <>
            <header className="flex justify-between items-center px-6 py-4 bg-gray-500">
            <Link to="/" className="text-2xl font-bold text-white">Rakesh Task</Link>

            <nav className="flex gap-6">
            <Link to="/" className="text-white">Home</Link>
            <Link to="/products" className="text-white">Product</Link>
            <Link to="/contact" className="text-white">Contact</Link>
            </nav>

      <div className="flex items-center gap-4">
        <Link to="/liked" className="text-white">♡</Link>
        <Link to="/dashboard" className="text-white hover:text-emerald-300">Dashboard</Link>
        <Link to="/login" className="text-white bg-emerald-600 border px-3 py-1 rounded hover:bg-emerald-700">Login</Link>
        <Link to="/signup" className="bg-emerald-600 text-white px-3 py-1 rounded hover:bg-emerald-700">Signup</Link>
      </div>
    </header> 
        </>
      
    </div>
  )
}

export default Header
