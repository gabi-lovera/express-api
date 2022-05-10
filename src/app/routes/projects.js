import {
  getProject,
  getProjects,
  createProject,
  updateProject,
  deleteProject,
} from '../controllers/projects.controller.js'
import verifyToken from '../middlewares/authentication.js'
import authorize from '../middlewares/authorization.js'
import express from 'express'
const router = express.Router()

router.get('/', getProjects)
router.post('/', verifyToken, authorize('admin', 'editor'), createProject)
router.get('/:id', getProject)
router.put('/:id', verifyToken, authorize('admin', 'editor'), updateProject)
router.delete('/:id', verifyToken, authorize('admin'), deleteProject)

export default router
