const mongoose = require('mongoose')

const Schema = mongoose.Schema

const deploymentSchema = new Schema({
    service: {
        type: String,
        required: true
    },
    environment: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    commit: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Deployment', deploymentSchema)