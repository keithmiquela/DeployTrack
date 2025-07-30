import { useState } from 'react'
import LoginForm from '../components/loginForm.jsx'

function Login() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="w-screen h-screen bg-slate-900 flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold text-blue-400 mb-2">DeployTrack</h1>
          <h2 className="text-xl text-white mb-6">Learning DevOps Deployment Tracking</h2>
          <LoginForm />
      </div>
    </>
  )
}

export default Login
