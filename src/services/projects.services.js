import Project from '../models/Project.js'

const findAllDB = () => Project.find()
const findDB = (id) => Project.findById(id)
const deleteDB = (id) => Project.findByIdAndDelete(id)
const updateDB = (id, project) =>
  Project.findByIdAndUpdate(id, project, { new: true })

const saveDB = (project) => {
  const { username, password } = project
  const newProject = new Project({
    username,
    password,
  })
  return newProject.save()
}

export { findDB, deleteDB, updateDB, saveDB, findAllDB }
