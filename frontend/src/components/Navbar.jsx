import React from 'react'

const Navbar = () => {
  return (
    <div className="bg-gray-700 h-16 flex flex-row justify-between items-center p-5">
      <div className='flex flex-row gap-10'>
        <p className='text-xl text-blue-400 font-bold'>DeployTrack</p>
        <div className='flex flex-row gap-8'>
          <button className="cursor-pointer text-gray-200 hover:text-white">Dashboard</button>
          <button className="cursor-pointer text-gray-200 hover:text-white">New Deployment</button>
        </div>
      </div>
      <div className='flex flex-row gap-2 text-sm'>
        <p className="text-gray-200">Demo User</p>
        <button className="cursor-pointer text-gray-200 hover:text-white">Logout</button>
      </div>
    </div>
  )
}

export default Navbar