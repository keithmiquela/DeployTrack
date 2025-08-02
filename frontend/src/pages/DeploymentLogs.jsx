import React from 'react'
import { useParams } from 'react-router'
import { useNavigate } from 'react-router';
import { useState, useEffect } from 'react';

const DeploymentLogs = () => {
    const backendPort = import.meta.env.VITE_BACKEND_PORT;
    const navigate = useNavigate();
    const params = useParams();
    const id = params.postId; 

    const [deployment, setDeployment] = useState(null)

    useEffect (() => {
        const fetchDeployment = async() =>{
        const response  = await fetch(`http://localhost:${backendPort}/deployments/${id}`)
        const json = await response.json()

        if(response.ok){
            setDeployments(json)
        }
        else{
            navigate("/404")
        }
        }

        fetchDeployment()
    }, [])

  return (
    <div>DeploymentLogs</div>
  )
}

export default DeploymentLogs