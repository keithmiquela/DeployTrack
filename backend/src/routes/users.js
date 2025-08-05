const express = require('express')
// const User = require('UserModel')
const {
    loginUser,
    signupUser
} = require('../controllers/userController')

const router = express.Router()

router.get('/', ()=> {})

router.get('/:id',()=> {})

router.post('/login', loginUser)

router.post('/signup', signupUser)

router.delete('/:id', ()=> {})

router.patch('/:id', ()=> {})

module.exports = router