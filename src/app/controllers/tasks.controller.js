import {
  isValidTaskToSave,
  isValidTaskToUpdate,
} from '../validators/tasks.validator.js'
import {
  updateTaskDB,
  saveTask,
  findAllTasks,
} from '../services/tasks.services.js'

export const getTasks = async (req, res) => {
  try {
    const taskFounds = await findAllTasks()
    if (!taskFounds) return res.status(404).json({ message: 'Tasks not found' })

    res.json(taskFounds)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const createTask = async (req, res) => {
  const task = req.body
  const validTask = isValidTaskToSave(task)

  if (!validTask) return res.status(400).json({ message: 'Invalid task' })

  try {
    const savedTask = await saveTask(task)
    res.status(200).json(savedTask)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const editTask = async (req, res) => {
  const { id } = req.params
  const task = req.body

  const validTask = isValidTaskToUpdate(task)
  if (!validTask) return res.status(400).json({ message: 'Invalid task' })

  try {
    const updatedTask = await updateTaskDB(id, task)
    if (!updatedTask) return res.status(404).json({ message: 'Task Not Found' })

    res.json(updatedTask)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
