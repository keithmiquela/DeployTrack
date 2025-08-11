const express = require('express')
const Deployment = require('../models/deploymentModel')
const {
    getDeployments,
    getDeployment,
    createDeployment,
    deleteDeployment,
    updateDeployment
} = require('../controllers/deploymentController')

const requireAuth = require("../middleware/requireAuth")

const router = express.Router()

router.use(requireAuth)

router.get('/', getDeployments)

router.get('/:id', getDeployment)

router.post('/', createDeployment)

router.delete('/:id', deleteDeployment)

router.patch('/:id', updateDeployment)

module.exports = router