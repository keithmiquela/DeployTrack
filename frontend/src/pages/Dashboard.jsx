import React from 'react'
import DeploymentTable from '../components/DeploymentTable.jsx'
import { useNavigate } from 'react-router'

const Dashboard = () => {

  const navigate = useNavigate()

  return (
    <div className='max-w-300 mx-auto'>
      <div className="flex flex-row justify-between items-center mt-6 mx-6 ">
        <h1 className="text-white text-2xl font-semibold">Deployment Dashboard</h1>
        <button className="text-white bg-blue-600 h-full py-2 px-4 rounded-lg cursor-pointer hover:bg-blue-500" onClick={() => navigate("../deployment/new")}>New Deployment</button>
      </div>
      <DeploymentTable />
    </div>
  )
}

export default Dashboard