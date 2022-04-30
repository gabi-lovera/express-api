import Task from '../models/Task.js'

const findAllTask = () => Task.find()

const updateTaskDB = (id, task) => {
  return Task.findByIdAndUpdate(id, task, { new: true })
}

const saveTask = (task) => {
  const { username, password } = task
  const newTask = new Task({
    username,
    password,
  })
  return newTask.save()
}

export { findAllTask, updateTaskDB, saveTask }
