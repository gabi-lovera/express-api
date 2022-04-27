import {
  getTasks,
  createTask,
  editTask,
} from '../app/controllers/tasks.controller.js'
import express from 'express'
const router = express.Router()

router.get('/', getTasks)
router.post('/', createTask)
router.put('/:id', editTask)

export default router
