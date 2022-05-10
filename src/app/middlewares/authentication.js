import jwt from 'jsonwebtoken'
import { findUserInDB } from '../services/users.services.js'

const verifyToken = async (req, res, next) => {
  let token
  const auth = req.headers.authorization

  if (auth && auth.startsWith('Bearer')) {
    token = auth.split(' ')[1]
  } else if (!token) {
    return res.status(401).json({ message: 'No authenticated to access this route' })
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    const userFound = await findUserInDB(decoded.id)

    if (!userFound) return res.status(404).json({ message: 'User not found' })
    
    req.user = userFound
    next()
  } catch (err) {
    res.status(401).json({ message: 'No authenticated to access this route' })
  }
}

export default verifyToken
