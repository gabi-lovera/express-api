import { isValidUser } from '../validators/users.validator.js'
import User from '../models/User.js'

export const getUser = async (req, res) => {
  const { id } = req.params
  try {
    const userFound = await User.findById(id)
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

  const { username, password } = user
  try {
    const newUser = new User({
      username,
      password,
    })
    const savedUser = await newUser.save()
    res.status(200).json(savedUser)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const updateUser = async (req, res) => {
  const { id } = req.params
  const user = req.body
  try {
    const updatedUser = await User.findByIdAndUpdate(id, user, {
      new: true,
    })
    if (!updatedUser) return res.status(404).json({ message: 'User Not Found' })

    res.json(updatedUser)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const deleteUser = async (req, res) => {
  const { id } = req.params
  try {
    const deletedUser = await User.findByIdAndDelete(id)
    if (!deletedUser)
      return res.status(404).json({ message: 'User does not exists' })

    res.end()
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
