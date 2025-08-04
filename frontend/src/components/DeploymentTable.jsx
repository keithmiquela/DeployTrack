import React from 'react'
import mockDeployments from '../data/mockDeployments'
import { useEffect } from 'react';
import DeploymentDetails from './DeploymentDetails';
import { useDeploymentsContext } from '../hooks/useDeploymentsContext';


const DeploymentTable = () => {
  const backendPort = import.meta.env.VITE_BACKEND_PORT;
  const columns = [
    {title: "NAME", _id: "1"},{title: "ENVIRONMENT", _id: "2"},{title: "DATE", _id: "3"},{title: "STATUS", _id:"4"}
  ];
  const {deployments, dispatch} = useDeploymentsContext();

  useEffect (() => {
    const fetchDeployments = async() =>{
      const response  = await fetch(`http://localhost:${backendPort}/deployments/`)
      const json = await response.json()

      if(response.ok){
        dispatch({type: 'SET_DEPLOYMENTS', payload: json})
      }
    }

    fetchDeployments()
  }, [dispatch])

  return (
    <div className='mx-7 my-5 overflow-hidden rounded-lg border border-gray-700' >
        <table className="w-full">
          <thead className='bg-gray-900 text-gray-400 h-10'>
            <tr>
              {columns.map((columnName) => (
                <th className="text-left px-6 font-normal text-sm" key={columnName._id}>{columnName.title}</th>
              ))}
              <th className="text-right px-6 font-normal text-sm">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {deployments && deployments.map((deployment) => (
                <DeploymentDetails key={deployment._id} deployment={deployment} />
              ))}
          </tbody>
        </table>
    </div>
  )
}

export default DeploymentTable