import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router'

const loginForm = () => {
    let navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState(null);
    const [password, setPassword] = useState('');
    const[passwordError, setPasswordError] = useState(null)

    const validateEmail = (value) => {

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value){
            return "Email is required"
        } else if (!emailRegex.test(value)){
            return "Invalid email format."
        }
        else {
            return null
        }
    }

    const validatePassword = (value) => {
        if (value.length < 8){
            return "Minimum of 8 characters."
        } 
        else {
            return null
        }
    }

    const handleEmailChange = (event) => {
        const value = event.target.value
        setEmail(value)
        setEmailError(validateEmail(value))
    }

    const handlePasswordChange = (event) => {
        const value = event.target.value;
        setPassword(value);
        setPasswordError(validatePassword(value));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setEmailError(validateEmail(email))
        setPasswordError(validatePassword(password));
        if(!validateEmail(email)&&!validatePassword(password)){
            localStorage.setItem("name", JSON.stringify(password));
            navigate("../");
        }
    }

    return (
        <>
            <form className="w-lg h-80 bg-gray-800 rounded-xl py-9 px-8" onSubmit={handleSubmit}>
                <p className="text-sm text-white mb-1">Email address</p>
                <input type="email" placeholder="name@example.com" required value={email} onChange={handleEmailChange}
                    className="bg-gray-700 w-full h-10 rounded-md px-3 text-sm text-gray-100 mb-2 focus:outline-2 focus:outline-blue-400"
                >
                </input>
                <div className="h-[1rem]">{emailError && <p className="text-xs text-red-400">{emailError}</p>}</div>
                <p className="text-sm text-white mb-1">Password</p>
                <input type="text" minLength={8} maxLength={32} required value={password} onChange={handlePasswordChange}
                    className="bg-gray-700 w-full h-10 rounded-md px-3 text-sm text-gray-100 mb-2 focus:outline-2 focus:outline-blue-400"
                >
                </input>
                <div className="h-[1rem] mb-2">{passwordError && <p className="text-xs text-red-400">{passwordError}</p>}</div>

                <button className="bg-blue-600 text-white text-sm w-full h-10 rounded-md hover:bg-blue-500 active:bg-blue-700 cursor-pointer mb-2">Sign In</button>
                <p className="text-gray-400 text-xs">For demo purposes, any email and password will work</p>
            </form>
        </>
    )
}

export default loginForm