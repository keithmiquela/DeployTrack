const User = require('../models/userModel')

const loginUser = async(req, res) => {

    res.status(200).json({mssg: "login user"})
}

const signupUser = async(req, res) =>{
    const {name, email, password} = req.body

    try {
        const user = await User.signup(name, email, password)

        res.status(200).json({name, email, user})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    loginUser,
    signupUser
}