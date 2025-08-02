const Deployment = require("../models/deploymentModel")
const mongoose = require('mongoose')

// get all deployments
const getDeployments = async (req, res) => {

    const deployments = await Deployment.find({}).sort({createdAt: -1})

    res.status(200).json(deployments)
}


// get a single deployment
const getDeployment = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such deployment"})
    }

    const deployment = await Deployment.findById(id)

    if(deployment){
        return res.status(404).json({error: "No such deployment"})
    }

    res.status(200).json(deployment)
}

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
const deleteDeployment = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such deployment"})
    }

    const deployment = await Deployment.findByIdAndDelete(id)

    if(!deployment){
        return res.status(404).json({error: "No such deployment"})
    }

    res.status(200).json(deployment)
}

//edit

const updateDeployment = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such deployment"})
    }

    const deployment = await Deployment.findOneAndUpdate({_id: id}, 
        {...req.body}
    )

    if(!deployment){
        return res.status(404).json({error: "No such deployment"})
    }

    res.status(200).json(deployment)

}


module.exports = {
    getDeployments, 
    getDeployment,
    createDeployment,
    deleteDeployment,
    updateDeployment
}