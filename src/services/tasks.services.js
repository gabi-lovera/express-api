import Task from '../models/Task.js'

const findAllDB = () => Task.find()
const findDB = (id) => Task.findById(id)
const deleteDB = (id) => Task.findByIdAndDelete(id)
const updateDB = (id, task) => Task.findByIdAndUpdate(id, task, { new: true })

const saveDB = (task) => {
  const { username, password } = task
  const newTask = new Task({
    username,
    password,
  })
  return newTask.save()
}

export { findDB, deleteDB, updateDB, saveDB, findAllDB }
