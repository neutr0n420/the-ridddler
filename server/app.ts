import express from 'express'
import dotenv from 'dotenv'
import healthcheckRouter from './controllers/healthcheck'
import riddleRouter from './controllers/riddle'

dotenv.config()

const app = express()

app.use(express.json())

app.use('/check', healthcheckRouter)
app.use('/api/riddle', riddleRouter)

export default app
