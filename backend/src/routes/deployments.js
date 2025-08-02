const express = require('express')
const Deployment = require('../models/deploymentModel')
const {createDeployment} = require('../controllers/deploymentController')

const router = express.Router()

router.get('/', (req, res) => {
    res.json({mssg: 'Get all deployments'})
})

router.get('/:id', (req, res) => {
    res.json({mssg: 'Get one deployment'})
})

router.post('/', createDeployment)

router.delete('/:id', (req, res) => {
    res.json({mssg: 'Delete a workout'})
})

router.patch('/:id', (req, res) => {
    res.json({mssg: 'Change a workout'})
})

module.exports = 