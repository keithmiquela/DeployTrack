const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const SaltRounds = 10;

const userSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

// static login method
userSchema.statics.login = async function (email, password){
    if(!email||!password){
        throw Error("All fields must be filled")
    }

    const user = await this.findOne({email})
    if(!user){
        throw Error("Incorrect email.")
    }

    const match = await bcrypt.compare(password, user.password)

    if(!match){
        throw Error("Incorrect password.")
    }

    return user
}

// static signup method
userSchema.statics.signup = async function (name, email, password) {

    if(!name||!email||!password){
        throw Error("All fields must be filled")
    }

    if(!validator.isEmail(email)){
        throw Error("Email is not valid.")
    }

    if(!validator.isStrongPassword(password)){
        throw Error("Password must be at least 8 characters long and include a number, a uppercase letter, a lowercase letter, and a symbol.")
    }

    const emailExists = await this.findOne({email})
    const nameExists = await this.findOne({name})
    if(emailExists){
        throw Error("Email already in use.")
    }
    if(nameExists){
        throw Error("Username already in use.")
    }
    
    const salt = await bcrypt.genSalt(SaltRounds)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({name, email, password: hash})

    return user
}

module.exports = mongoose.model('User', userSchema)