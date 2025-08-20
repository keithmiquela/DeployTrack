import React from 'react'
import { useParams } from 'react-router'
import { useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import Status from '../components/Status';
import LogsTable from '../components/LogsTable';
import { useAuthContext } from '../hooks/useAuthContext';
import { apiCall } from "../config/api";

const DeploymentLogs = () => {
    const backendPort = import.meta.env.VITE_BACKEND_PORT;
    const navigate = useNavigate();
    const params = useParams();
    const id = params.id; 

    const [deployment, setDeployment] = useState(null)

    const {user} = useAuthContext();

    useEffect (() => {
        const fetchDeployment = async() =>{
            const response  = await apiCall(`/deployments/${id}`, {
                headers: {
                'Authorization': `Bearer ${user.token}`
                }
            })
            const json = await response.json()
            if(response.ok){
                setDeployment(json)
            }
            else{
                navigate("/404")
            }
        }

        fetchDeployment()
    }, [])

  return (
    <>
        <div className='max-w-300 mx-auto'>
            <div className="flex flex-col justify-between items-left mt-6 mx-6">
                <span className='text-blue-400 text-xs mb-3 hover:text-blue-300 cursor-pointer active:text-blue-500' onClick={() => {navigate("/dashboard")}}>← Back to Dashboard</span>
                <h1 className="text-white text-2xl font-semibold">{deployment && deployment.service}</h1>
                <div>
                    <p>
                        <span className='text-sm text-gray-400'>Environment: </span> 
                        {deployment && <span className='text-sm text-white mr-5'>{deployment.environment}</span>}
                        {deployment && <span className='text-xs'><Status status={deployment.status}/></span>}
                    </p>
                </div>
            </div>
            <p></p>
            <LogsTable />
        </div>
    </>
  )
}

export default DeploymentLogs