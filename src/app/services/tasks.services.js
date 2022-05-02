import Task from '../models/Task.js'

const findAllTasks = () => Task.find()

const updateTaskDB = (id, task) => {
  return Task.findByIdAndUpdate(id, task, { new: true })
}

const saveTask = (task) => {
  const { description, finished, user_id, project_id } = task
  const newTask = new Task({
    description,
    finished,
    user_id,
    project_id,
  })
  return newTask.save()
}

export { findAllTasks, updateTaskDB, saveTask }
