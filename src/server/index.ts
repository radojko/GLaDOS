import dotenv from 'dotenv'
dotenv.config()

import { createServer } from 'http'
import express, { json } from 'express'
import morgan from 'morgan'
import { Server } from 'ws'
import { connect } from 'mongoose'
import routes from './routes'

const app = express()
const server = createServer(app)
const wss = new Server({ server })

app.use(json())
app.use(morgan('dev'))

routes(app);

export default server