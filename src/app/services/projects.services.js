import Project from '../models/Project.js'

const findAllProjects = () => Project.find()

const findProject = (id) => Project.findById(id)

const deleteProjectDB = (id) => Project.findByIdAndDelete(id)

const updateProjectDB = (id, project) => {
  return Project.findByIdAndUpdate(id, project, { new: true })
}

const saveProject = (project) => {
  const { username, password } = project
  const newProject = new Project({
    username,
    password,
  })
  return newProject.save()
}

export {
  findAllProjects,
  findProject,
  deleteProjectDB,
  updateProjectDB,
  saveProject,
}
