import { useState } from 'react'
import LoginForm from '../components/LoginForm.jsx'
import { useNavigate } from 'react-router'

function Login() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate()

  return (
    <>
      <div className="w-screen h-screen bg-slate-900 flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold text-blue-400 mb-2">DeployTrack</h1>
          <h2 className="text-xl text-white mb-6">Learning DevOps Deployment Tracking</h2>
          <LoginForm />
          <p className="text-gray-400 text-sm mt-4">Don't have an account? <button onClick={() => navigate("/user/signup")} className="text-blue-400 hover:underline">Sign up</button></p>
      </div>
    </>
  )
}

export default Login
