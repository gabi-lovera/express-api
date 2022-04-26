import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import 'dotenv/config'
import { blueLog } from './utils/logs.js'
import connectDB from './database.js'
import usersRouter from './routes/users.js'
import projectsRouter from './routes/projects.js'
import commentsRouter from './routes/comments.js'

const app = express()

app.use(cors())
app.use(helmet())
app.use(morgan('dev'))
app.use(express.json())
app.disable('x-powered-by')
app.use(express.urlencoded({ extended: false }))

app.use('/users', usersRouter)
app.use('/projects', projectsRouter)
app.use('/comments', commentsRouter)

await connectDB()

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  blueLog(`Server is running on port ${PORT}`)
})
