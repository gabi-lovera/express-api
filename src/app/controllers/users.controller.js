import { isValidUser } from '../../validators/users.validator.js'
import { saveDB, findDB } from '../services/users.services.js'

export const getUser = async (req, res) => {
  const { id } = req.params
  try {
    const userFound = await findDB(id)
    if (!userFound) return res.status(404).json({ message: 'User not found' })

    res.json(userFound)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const createUser = async (req, res) => {
  const user = req.body
  const validUser = isValidUser(user)

  if (!validUser) return res.status(400).send('Invalid user')

  try {
    const savedUser = await saveDB(user)
    res.status(200).json(savedUser)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
