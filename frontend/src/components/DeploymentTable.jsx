import React from 'react'
import mockDeployments from '../data/mockDeployments'
import { useEffect } from 'react';
import DeploymentDetails from './DeploymentDetails';
import { useDeploymentsContext } from '../hooks/useDeploymentsContext';
import { useAuthContext } from '../hooks/useAuthContext';


const DeploymentTable = () => {
  const backendPort = import.meta.env.VITE_BACKEND_PORT;
  const columns = [
    {title: "NAME", _id: "1"},{title: "CREATED BY", _id: "2"},{title: "ENVIRONMENT", _id: "3"},{title: "DATE", _id: "4"},{title: "STATUS", _id:"5"},{title: "ACTIONS", _id:"6"}
  ];
  const {deployments, dispatch} = useDeploymentsContext();

  const {user} = useAuthContext();

  useEffect (() => {
    const fetchDeployments = async() =>{
      const response  = await fetch(`http://localhost:${backendPort}/deployments/`, {
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      })
      const json = await response.json()

      if(response.ok){
        dispatch({type: 'SET_DEPLOYMENTS', payload: json})
      }
    }
    if(user){
      fetchDeployments()
    }
  }, [dispatch, user])

  return (
    <div className='mx-7 my-5 rounded-lg border border-gray-700 max-h-[75vh] overflow-y-auto' >
        <table className="w-full">
          <thead className='bg-gray-900 text-gray-400 h-10 sticky top-0'>
            <tr>
              {columns.map((columnName) => (
                <th className="text-left last:text-right px-6 font-normal text-sm pt-1" key={columnName._id}>{columnName.title}</th>
              ))}
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