import {
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from '../controllers/users.controller.js'
import express from 'express'
const router = express.Router()

router.post('/', createUser)
router.get('/:id', getUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)

export default router
