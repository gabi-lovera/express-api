import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import { PORT } from './config/index.js'
import { blueLog } from './utils/logs.js'
import connectDB from './databases/mongodb.js'
import {
  usersRouter,
  projectsRouter,
  tasksRouter,
  authRouter,
} from './app/routes/index.js'

const app = express()

app.use(cors())
app.use(helmet())
app.use(morgan('dev'))
app.use(express.json())
app.disable('x-powered-by')
app.use(express.urlencoded({ extended: false }))

app.use('/users', usersRouter)
app.use('/projects', projectsRouter)
app.use('/tasks', tasksRouter)
app.use('/auth', authRouter)

await connectDB()

export const server = app.listen(PORT, () => {
  blueLog(`Server is running on port ${PORT}`)
})
