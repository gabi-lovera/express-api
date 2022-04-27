import {
  getProject,
  getProjects,
  createProject,
  updateProject,
  deleteProject,
} from '../app/controllers/projects.controller.js'
import express from 'express'
const router = express.Router()

router.get('/', getProjects)
router.post('/', createProject)
router.get('/:id', getProject)
router.put('/:id', updateProject)
router.delete('/:id', deleteProject)

export default router
