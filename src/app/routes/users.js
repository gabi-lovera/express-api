import { getUser, createUser } from '../controllers/users.controller.js'
import express from 'express'
const router = express.Router()

router.post('/', createUser)
router.get('/:id', getUser)

export default router
