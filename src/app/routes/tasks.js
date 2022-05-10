import {
  getTasks,
  createTask,
  editTask,
} from '../controllers/tasks.controller.js'
import verifyToken from '../middlewares/authentication.js'
import express from 'express'
const router = express.Router()

router.get('/', getTasks)
router.post('/', verifyToken, createTask)
router.put('/:id', verifyToken, editTask)

export default router
