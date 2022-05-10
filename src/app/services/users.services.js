import User from '../models/User.js'

const findUserInDB = (id) => User.findById(id)

const saveUserInDB = (user) => {
  const { name, email, password, role } = user
  const newUser = new User({
    name,
    email,
    password,
    role,
  })
  return newUser.save()
}

const findUserToLogin = (email) => {
  return User.findOne({ email }).select('password')
}

export { findUserInDB, saveUserInDB, findUserToLogin }
