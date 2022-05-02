import {
  isValidProjectToSave,
  isValidProjectToUpdate,
} from '../validators/projects.validator.js'
import {
  findProject,
  updateProjectDB,
  saveProject,
  deleteProjectDB,
  findAllProjects,
} from '../services/projects.services.js'

export const getProject = async (req, res) => {
  const { id } = req.params
  try {
    const projectFound = await findProject(id)
    if (!projectFound) {
      return res.status(404).json({ message: 'Project not found' })
    }

    res.json(projectFound)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getProjects = async (req, res) => {
  try {
    const projectsFound = await findAllProjects()
    if (!projectsFound) {
      return res.status(404).json({ message: 'Projects not found' })
    }

    res.json(projectsFound)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const createProject = async (req, res) => {
  const project = req.body
  const validProject = isValidProjectToSave(project)

  if (!validProject) return res.status(400).send('Invalid project')

  try {
    const savedProject = await saveProject(project)
    res.status(200).json(savedProject)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const updateProject = async (req, res) => {
  const { id } = req.params
  const project = req.body

  const validProject = isValidProjectToUpdate(project)
  if (!validProject) return res.status(400).send('Invalid project')

  try {
    const updatedProject = await updateProjectDB(id, project)
    if (!updatedProject) {
      return res.status(404).json({ message: 'Project Not Found' })
    }

    res.json(updatedProject)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const deleteProject = async (req, res) => {
  const { id } = req.params
  try {
    const deletedProject = await deleteProjectDB(id)
    if (!deletedProject) {
      return res.status(404).json({ message: 'Project does not exists' })
    }

    res.end()
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
