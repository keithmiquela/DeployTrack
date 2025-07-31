import React from 'react'
import mockDeployments from '../data/mockDeployments'
import Status from './Status';

const DeploymentTable = () => {

  const columns = ["NAME","ENVIRONMENT","DATE","STATUS"];
  
  const deployments = mockDeployments;

  return (
    <div className='mx-7 my-5 overflow-hidden rounded-lg border border-gray-700'>
        <table className="w-full">
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
                <tr className='bg-gray-800 h-15 border-t border-gray-700'>
                  <th className="text-left px-6 py-2 font-normal">
                    <p className='text-sm text-white'>{deployment.id}</p>
                    <p className='text-xs text-gray-400'>{deployment.message}</p>
                  </th>
                  <th className="text-left px-6 font-normal text-xs text-white">
                    <span className='bg-gray-700 p-2 rounded-3xl w-auto'>{deployment.environment}</span>
                  </th>
                  <th className="text-left px-6 font-normal text-sm text-gray-300 min-w-55">
                    {new Date(deployment.timestamp).toLocaleString()}
                  </th>
                  <th className="text-left px-6 font-normal text-xs">
                    <div className='min-w-25'>
                      <Status status={deployment.status} />
                    </div>
                  </th>
                  <th className="text-right px-6 font-normal text-sm text-white">
                    <div className='flex gap-3'>
                      <button className='w-18 text-blue-400 font-semibold hover:text-blue-300 cursor-pointer'>View Logs</button>
                      <button className='text-red-400 font-semibold hover:text-red-300 cursor-pointer'>Delete</button>
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