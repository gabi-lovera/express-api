import { isValidTask } from '../validators/tasks.validator.js'
import { updateDB, saveDB, findAllDB } from '../services/tasks.services.js'

export const getTasks = async (req, res) => {
  try {
    const taskFound = await findAllDB()
    if (!taskFound) return res.status(404).json({ message: 'Task not found' })

    res.json(taskFound)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const createTask = async (req, res) => {
  const task = req.body
  const validTask = isValidTask(task)

  if (!validTask) return res.status(400).send('Invalid task')

  try {
    const savedTask = await saveDB(task)
    res.status(200).json(savedTask)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const editTask = async (req, res) => {
  const { id } = req.params
  const task = req.body
  try {
    const updatedTask = await updateDB(id, task)
    if (!updatedTask) return res.status(404).json({ message: 'Task Not Found' })

    res.json(updatedTask)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
