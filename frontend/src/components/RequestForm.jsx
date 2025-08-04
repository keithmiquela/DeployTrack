import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router'

const RequestForm = () => {

    const [service, setService] = useState(null)
    const [environment, setEnvironment] = useState("development")
    const [status, setStatus] = useState('success')
    const [duration, setDuration] = useState("1 min 0 s")
    const [commit, setCommit] = useState("abcdef")
    const [user, setUser] = useState("test user")
    const [message, setMessage] = useState(null)

    const[error, setError] = useState(null);
    const[emptyFields, setEmptyFields] = useState([])

    const navigate = useNavigate()

    const handleSubmit = async(e) => {

        const port = import.meta.env.VITE_BACKEND_PORT
        
        e.preventDefault()

        const deployment = {service, environment, status, duration, commit, user, message}

        const response = await fetch(`http://localhost:${port}/deployments/`, {
            method:"POST",
            body: JSON.stringify(deployment),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()

        if(!response.ok){
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }
        else{
            setService(null)
            setEnvironment('development')
            setStatus('success')
            setDuration('1 min 0 s')
            setCommit('abcdef')
            setUser('test user')
            setMessage(null)
            setError(null)
            setEmptyFields([])

            console.log("new deployment added", json)
        }
    }

  return (
    <>
        <form className="w-[95vw] h-107 bg-gray-800 rounded-xl py-9 px-8" onSubmit={ handleSubmit}>
            <label htmlFor="service" className="text-sm text-white mb-1">Deployment Name</label>
            <input 
                id="service" 
                type="text" 
                placeholder="Frontend Update v1.2" 
                value = {service||""}
                onChange = {(e)=>{setService(e.target.value)}} 
                className={`w-full h-10 rounded-md px-3 text-sm text-gray-100 mb-2 focus:outline-2 focus:outline-blue-400 bg-gray-700 
                            ${(emptyFields?.includes("service")? "outline-2 outline-red-400" : "")}
                        `}
            >
            </input>
            <div className="h-[1rem]"></div>
            <label htmlFor="environment" className="text-sm text-white mb-1">Environment</label>
            <select 
                id="environment" 
                onChange={(e)=>{setEnvironment(e.target.value)}} 
                value = {environment}
                className="bg-gray-700 w-full h-10 rounded-md px-3 text-sm text-gray-100 mb-2 focus:outline-2 focus:outline-blue-400"
            >
                <option value="development">Development</option>
                <option value="staging">Staging</option>
                <option value="production">Production</option>
            </select>
            <div className="h-[1rem] mb-2"></div>

            <label htmlFor="message" className="text-sm text-white mb-1">Description</label>
            <textarea 
                id="message" 
                type="text" 
                placeholder="Describe the deployment." 
                value = {message||""}
                onChange={(e)=>{setMessage(e.target.value)}} 
                className="bg-gray-700 w-full rounded-md px-3 pt-3 text-sm text-gray-100 mb-2 focus:outline-2 focus:outline-blue-400 min-h-22"
            >
            </textarea>
            {error && <p className="text-red-400 text-sm ml-1">{error}</p>}
            {emptyFields && <p className="text-red-400 text-sm ml-1">Here are the empty fields: {emptyFields}</p>}
            
            <div className="h-[1rem]"></div>
            <div className='flex justify-end w-full gap-3'>
                <button className="bg-gray-600 text-white text-sm w-20 h-10 rounded-md hover:bg-gray-500 active:bg-gray-700 cursor-pointer mb-2" type="button" onClick={() => {navigate("/dashboard")}}>Cancel</button>
                <button className="bg-blue-600 text-white text-sm w-45 h-10 rounded-md hover:bg-blue-500 active:bg-blue-700 cursor-pointer mb-2" type="submit">Submit Deployment</button>
            </div>
        </form>
    </>
  )
}

export default RequestForm