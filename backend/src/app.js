require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const deploymentRoutes = require('./routes/deployments')
const userRoutes = require('./routes/users')

// express app
const app = express()

// middleware
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/deployments/',deploymentRoutes)
app.use('/user/', userRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Connected to db, listening on port ${process.env.PORT}`)
    })
  })
  .catch((error) => {
    console.log(error)
  })

// listen for reques