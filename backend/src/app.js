import path from 'path';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import deploymentRoutes from './routes/deployments.js';
import userRoutes from './routes/users.js';

dotenv.config();

// express app
const app = express()

import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

if(process.env.NODE_ENV === "production"){
  app.use(express.static(path.join(__dirname, "../../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../../frontend/dist/index.html"))
  })
}

//connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Connected to db, listening on port ${process.env.PORT}`);
    })
  })
  .catch((error) => {
    console.log(error)
  })

// listen for reques