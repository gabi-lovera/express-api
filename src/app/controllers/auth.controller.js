import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken';
import { findUserToLogin } from '../services/users.services.js'
import { isValidToLogin } from '../validators/users.validator.js'

export const loginUser = async (req, res) => {
  const { email, password } = req.body

  if (!isValidToLogin(email, password)) {
    return res.status(400).json({ message: 'Please provide correct email and password' })
  }

  try {
    const userFound = await findUserToLogin(email)
    if (!userFound) return res.status(401).json({ message: 'Invalid credentials' })

    const isMatch = await bcrypt.compare(password, userFound.password)
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' })

    const token = jwt.sign(
      {
        id: userFound._id,
      },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRE }
    )

    res.status(200).json({ token })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
