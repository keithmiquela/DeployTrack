const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

// create token that expires in 3 days
const createToken = (_id) => {
    return jwt.sign({_id},process.env.SECRET, {expiresIn: '3d'})
}

const loginUser = async(req, res) => {

    res.status(200).json({mssg: "login user"})
}

// sign up user
const signupUser = async(req, res) =>{
    const {name, email, password} = req.body

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