import React from 'react'
import mockDeployments from '../data/mockDeployments'

const DeploymentTable = () => {

  const columns = ["NAME","ENVIRONMENT","DATE","STATUS"];
  
  const deployments = mockDeployments;

  return (
    <div className='mx-7 my-5 border-1 border-solid border-gray-700'>
        <table className="bg-white w-full">
          <thead className='bg-gray-900 text-gray-400 h-10'>
            <tr>
              {columns.map((columnName) => (
                <th className="text-left px-6 font-normal text-sm">{columnName}</th>
              ))}
              <th className="text-right px-6 font-normal text-sm">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {deployments.map((deployment) => (
                <tr className='bg-gray-800'>
                  <th className="text-left px-6 py-2 font-normal">
                    <p className='text-sm text-white'>{deployment.id}</p>
                    <p className='text-xs text-gray-400'>{deployment.message}</p>
                  </th>
                  <th className="text-left px-6 font-normal text-xs text-white">
                    <span className='bg-gray-700 p-2 rounded-3xl w-auto'>{deployment.environment}</span>
                  </th>
                  <th className="text-left px-6 font-normal text-sm text-gray-300">
                    {new Date(deployment.timestamp).toLocaleString()}
                  </th>
                  <th className="text-left px-6 font-normal text-xs">
                    <span 
                      className='bg-gray-700 p-2 rounded-3xl w-auto'
                      
                      
                    >{deployment.status}</span>
                  </th>
                  <th className="text-right px-6 font-normal text-sm text-white">
                    <div className='flex'>
                      <button className='w-18'>View Logs</button>
                      <button>Delete</button>
                    </div>
                  </th>
                </tr>
              ))}
          </tbody>
        </table>
    </div>
  )
}

export default DeploymentTable