import project from '../mocks/projects.json'
import { prepareTest } from '../util.js'
import {
  findProject,
  findAllProjects,
  saveProject,
  updateProjectDB,
  deleteProjectDB,
} from '../../app/services/projects.services.js'

describe('Project services', () => {
  prepareTest()
  let projectId
  let projectUpdated

  it('should be the same title as the saved project', async () => {
    const projectSaved = await saveProject(project.valid)
    projectId = projectSaved._id.valueOf()
    const projectFound = await findProject(projectId)

    expect(projectSaved.title).toBe(projectFound.title)
  })
  it('should be update to the new title', async () => {
    projectUpdated = await updateProjectDB(projectId, {
      title: 'my new title..',
      description: 'my new project description..',
    })
    expect(projectUpdated.title).toBe('my new title..')
    expect(projectUpdated.description).toBe('my new project description..')
  })
  it('should contain the updated project', async () => {
    const projectsFound = await findAllProjects()
    expect(projectsFound).toEqual(
      expect.arrayContaining([expect.objectContaining(projectUpdated)])
    )
  })
  it('should have the same id as the deleted project', async () => {
    const Projectdeleted = await deleteProjectDB(projectId)
    expect(Projectdeleted._id).toStrictEqual(projectUpdated._id)
  })
})
