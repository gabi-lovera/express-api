import User from '../models/User.js'

const findUserInDB = (id) => User.findById(id)

const saveUserInDB = (user) => {
  const { name, email, password } = user
  const newUser = new User({
    name,
    email,
    password,
  })
  return newUser.save()
}

export { findUserInDB, saveUserInDB }
