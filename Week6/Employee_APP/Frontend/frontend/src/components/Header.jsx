import React from 'react'
import { NavLink } from 'react-router'

function Header() {
  return (
    <nav className='flex justify-end text-2xl gap-5 bg-gray-500 p-5'>
             <NavLink
    to=""
    className={({ isActive }) =>
      isActive
        ? "bg-blue-500 text-white px-5 py-2 rounded-xl font-semibold shadow-md transition duration-300"
        : "text-gray-300 hover:bg-slate-700 hover:text-white px-5 py-2 rounded-xl font-semibold transition duration-300"
    }
  >
    Home
  </NavLink>


  {/* Create Employee Link */}
  <NavLink
    to="createemp"
    className={({ isActive }) =>
      isActive
        ? "bg-green-500 text-white px-5 py-2 rounded-xl font-semibold shadow-md transition duration-300"
        : "text-gray-300 hover:bg-slate-700 hover:text-white px-5 py-2 rounded-xl font-semibold transition duration-300"
    }
  >
    Create Employee
  </NavLink>


  {/* Employee List Link */}
  <NavLink
    to="list"
    className={({ isActive }) =>
      isActive
        ? "bg-purple-500 text-white px-5 py-2 rounded-xl font-semibold shadow-md transition duration-300"
        : "text-gray-300 hover:bg-slate-700 hover:text-white px-5 py-2 rounded-xl font-semibold transition duration-300"
    }
  >
    Employee List
  </NavLink>

    </nav>
  )
}

export default Header