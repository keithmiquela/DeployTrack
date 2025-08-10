import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { useSignup } from '../hooks/useSignup.js'

const SignupForm = () => {

    const navigate = useNavigate();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const {signup, isLoading, error} = useSignup();

    const handleSubmit = async(e) => {
        e.preventDefault();

        await signup(name, email, password)
    }

    return (
        <>
            <form className="w-lg h-95 bg-gray-800 rounded-xl py-9 px-8" onSubmit={handleSubmit}>
                <div className='flex flex-col gap-4'>
                    <div>
                        <label 
                            htmlFor='name' 
                            className="text-sm text-white"
                        >
                            Username
                        </label>
                        <input 
                            id = "name"
                            type="test" 
                            placeholder="John Doe" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)}
                            className="bg-gray-700 w-full h-10 rounded-md px-3 text-sm text-gray-100 focus:outline-2 focus:outline-blue-400"
                        >
                        </input>
                    </div>
                    <div>
                        <label 
                            htmlFor='email' 
                            className="text-sm text-white"
                        >
                            Email address
                        </label>
                        <input 
                            id = "email"
                            type="type" 
                            placeholder="name@example.com" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}
                            className="bg-gray-700 w-full h-10 rounded-md px-3 text-sm text-gray-100 focus:outline-2 focus:outline-blue-400"
                        >
                        </input>
                    </div>
                    <div>
                        <label htmlFor="password" className="text-sm text-white">Password</label>
                        <input 
                            id="password" 
                            type="text" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)}
                            className="bg-gray-700 w-full h-10 rounded-md px-3 text-sm text-gray-100 focus:outline-2 focus:outline-blue-400"
                        >
                        </input>
                    </div>
                    <button className="bg-blue-600 text-white text-sm w-full h-10 rounded-md hover:bg-blue-500 active:bg-blue-700 cursor-pointer mb-2" disabled={isLoading}>Sign In</button>
                </div>
                {error && <p className="text-red-400 text-sm ml-1">{error}</p>}
            </form>
        </>
    )
}

export default SignupForm