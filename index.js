import express from 'express'
import mongoose from 'mongoose'
import router from './router.js'
import fileupload from 'express-fileupload'
import dotenv from 'dotenv'


const PORT = 5000
const app = express()
app.use(express.json())
app.use(express.static('static'))
app.use(fileupload({}))
app.use('/api', router)
dotenv.config()
const DB_URL = process.env.DB_URL

async function stratApp() {
  try {
    await mongoose.connect(DB_URL)
    app.listen(PORT, () => console.log(`Server is working on port: ${PORT}!`))
  } catch (error) {
    console.log('error: ', error);
  }
}

stratApp()