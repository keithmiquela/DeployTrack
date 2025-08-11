import React from 'react'
import Status from './Status'
import { useNavigate } from 'react-router'
import { useDeploymentsContext } from '../hooks/useDeploymentsContext'
import { useState } from 'react'
import { useAuthContext } from '../hooks/useAuthContext'

const DeploymentDetails = ({deployment}) => {

    const navigate = useNavigate();

    const {dispatch} = useDeploymentsContext();

    const [error, setError] = useState(null)

    const {user} = useAuthContext();

    const handleDelete = async(e) => {

        if (!user){
            return
        }
        const port = import.meta.env.VITE_BACKEND_PORT

        const response = await fetch(`http://localhost:${port}/deployments/${deployment._id}`, {
            method:"DELETE",
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })

        const json = await response.json()

        if(!response.ok){
            setError(json.error)
        }
        else{
            dispatch({type: 'DELETE_DEPLOYMENT', payload: json})
        }
    }

  return (
    <tr className='bg-gray-800 h-15 border-t border-gray-700' key={deployment._id}>
        <th className="text-left px-6 py-2 font-normal">
        <p className='text-sm text-white' >{deployment.service}</p>
        <p className='text-xs text-gray-400'>{deployment.message}</p>
        </th>
        <th className="text-left px-6 font-normal text-xs text-white">
        <span className='bg-gray-700 p-2 rounded-3xl w-auto'>{deployment.environment}</span>
        </th>
        <th className="text-left px-6 font-normal text-sm text-gray-300 min-w-55">
        {new Date(deployment.createdAt).toLocaleString()}
        </th>
        <th className="text-left px-6 font-normal text-xs">
        <div className='min-w-25'>
            <Status status={deployment.status} />
        </div>
        </th>
        <th className="text-right px-6 font-normal text-sm text-white">
        <div className='flex gap-3'>
            <button className='w-18 text-blue-400 font-semibold hover:text-blue-300 cursor-pointer' onClick={() => {navigate(`../deployment/${deployment._id}`)}}>View Logs</button>
            <button className='text-red-400 font-semibold hover:text-red-300 cursor-pointer' onClick={handleDelete}>Delete</button>
        </div>
        </th>
    </tr>
  )
}

export default DeploymentDetails