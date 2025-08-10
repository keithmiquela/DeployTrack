import React from 'react'
import { useNavigate } from 'react-router'
import { NavLink } from 'react-router'
import { useAuthContext } from '../hooks/useAuthContext'
import { useLogout } from '../hooks/useLogout'

const Navbar = () => {

  const user = JSON.parse(localStorage.getItem("user"));

  const port = import.meta.env.VITE_BACKEND_PORT;
  const navigate = useNavigate()

  const {logout} = useLogout()

  const {dispatch} = useAuthContext();

  const handleLogout = async (e) => {
    await logout()
    navigate("/user/login")
  }

  return (
    <div className="bg-gray-700 h-16 flex flex-row justify-between items-center p-5 overflow-hidden">
      <div className='flex flex-row gap-10'>
        <p className='text-xl text-blue-400 font-bold'>DeployTrack</p>
        <div className='flex flex-row gap-8'>
          <NavLink to="/dashboard">
            {({isActive})=>(
              <span className=
                {isActive
                  ? "cursor-pointer text-gray-200 hover:text-white bg-gray-600 p-2 rounded-lg"
                  : "cursor-pointer text-gray-200 hover:text-white p-2"
                }
              >
                Dashboard
              </span>
            )}
          </NavLink>
          <NavLink to="/deployment/new">
            {({isActive})=>(
              <span className=
                {isActive
                  ? "cursor-pointer text-gray-200 hover:text-white bg-gray-600 p-2 rounded-lg"
                  : "cursor-pointer text-gray-200 hover:text-white p-2"
                }
              >
                New Deployment
              </span>
            )}
          </NavLink>
        </div>
      </div>
      <div className='flex flex-row gap-2 text-sm'>
        <p className="text-gray-200">{user?.name}</p>
        <button className="cursor-pointer text-gray-200 hover:text-white" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar