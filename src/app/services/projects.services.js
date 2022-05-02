import Project from '../models/Project.js'

const findAllProjects = () => Project.find()

const findProject = (id) => Project.findById(id)

const deleteProjectDB = (id) => Project.findByIdAndDelete(id)

const updateProjectDB = (id, project) => {
  return Project.findByIdAndUpdate(id, project, { new: true })
}

const saveProject = (project) => {
  const { title, description } = project
  const newProject = new Project({
    title,
    description,
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
