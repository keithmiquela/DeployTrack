import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { useLogin } from '../hooks/useLogin'

const LoginForm = () => {

    const navigate = useNavigate();


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const {login, isLoading, error} = useLogin();

    const handleSubmit = async(e) => {
        e.preventDefault();

        await login(email, password)
    }

    return (
        <>
            <form className="w-lg h-80 bg-gray-800 rounded-xl py-9 px-8" onSubmit={handleSubmit}>
                <label 
                    htmlFor='email' 
                    className="text-sm text-white mb-1"
                >
                    Email address
                </label>
                <input 
                    id = "email"
                    type="email" 
                    placeholder="name@example.com" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-gray-700 w-full h-10 rounded-md px-3 text-sm text-gray-100 mb-2 focus:outline-2 focus:outline-blue-400"
                >
                </input>
                <div className="h-[1rem]"></div>
                <label htmlFor="password" className="text-sm text-white mb-1">Password</label>
                <input 
                    id="password" 
                    type="text" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-gray-700 w-full h-10 rounded-md px-3 text-sm text-gray-100 mb-2 focus:outline-2 focus:outline-blue-400"
                >
                </input>
                <div className="h-[1rem] mb-2"></div>

                <button className="bg-blue-600 text-white text-sm w-full h-10 rounded-md hover:bg-blue-500 active:bg-blue-700 cursor-pointer mb-2">Sign In</button>
                <p className="text-gray-400 text-xs">For demo purposes, any email and password will work</p>
                {error && <p className="text-red-400 text-sm ml-1">{error}</p>}
            </form>
        </>
    )
}

export default LoginForm