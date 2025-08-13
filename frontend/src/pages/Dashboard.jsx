import React from 'react'
import DeploymentTable from '../components/DeploymentTable.jsx'
import { useNavigate } from 'react-router'
import { useState } from 'react'

const Dashboard = () => {

  const navigate = useNavigate()
  
  const [viewGlobal, setViewGlobal] = useState(false)

  return (
    <div className='max-w-300 mx-auto'>
      <div className="flex flex-row justify-between items-center mt-6 mx-6 ">
        <h1 className="text-white text-2xl font-semibold">Deployment Dashboard</h1>
        <div className='flex items-center gap-5 text-white'>
          <div className='flex gap-2'>
            <label for='view-global'>View global deployments: </label>
            <input id="view-global" type="checkbox" className='w-6 h-6' value={viewGlobal} onChange={(e) => setViewGlobal(e.target.checked)}></input>
          </div>
          <button className="text-white bg-blue-600 h-full py-2 px-4 rounded-lg cursor-pointer hover:bg-blue-500" onClick={() => navigate("../deployment/new")}>New Deployment</button>
        </div>
      </div>
      <DeploymentTable isViewGlobal={viewGlobal}/>
    </div>
  )
}

export default Dashboard