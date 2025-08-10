const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

// create token that expires in 3 days
const createToken = (_id) => {
    return jwt.sign({_id},process.env.SECRET, {expiresIn: '3d'})
}

const loginUser = async(req, res) => {

    const {email, password} = req.body

    let emptyFields = []
    
    if(!email){
        emptyFields.push('email')
    }
    if(!password){
        emptyFields.push('password')
    }

    if(emptyFields.length > 0){
        return res.status(400).json({error: "Please fill in all the fields", emptyFields})
    }

    try {
        const user = await User.login(email, password)
        const name = user.name

        const token = createToken(user._id)

        res.status(200).json({name, email, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// sign up user
const signupUser = async(req, res) =>{
    const {name, email, password} = req.body

    let emptyFields = []
    if(!name){
        emptyFields.push('name')
    }
    if(!email){
        emptyFields.push('email')
    }
    if(!password){
        emptyFields.push('password')
    }

    if(emptyFields.length > 0){
        return res.status(400).json({error: "Please fill in all the fields", emptyFields})
    }

    try {
        const user = await User.signup(name, email, password)

        const token = createToken(user._id)

        res.status(200).json({name, email, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    loginUser,
    signupUser
}