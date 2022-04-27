import User from '../models/User.js'

const findDB = (id) => User.findById(id)

const saveDB = (user) => {
  const { username, password } = user
  const newUser = new User({
    username,
    password,
  })
  return newUser.save()
}

export { findDB, saveDB }
