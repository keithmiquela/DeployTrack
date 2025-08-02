const Deployment = require("../models/deploymentModel")

// get all deployments



// get a single deployment


// create

const createDeployment = async (req, res) => {
    const {service, environment, status, duration, commit, user, message} = req.body
    
    try {
        const deployment = await Deployment.create({service, environment, status, duration, commit, user, message})
        res.status(200).json(deployment)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


// delete


//edit

module.exports = {
    createDeployment