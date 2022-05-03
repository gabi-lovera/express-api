import project from '../mocks/projects.json'
import { server } from '../../app'
import request from 'supertest'

describe('Projects routes', () => {
  describe('GET /projects', () => {
    it('should get status 200 and header with content-type json', async () => {
      const response = await request(server).get('/projects')
      expect(response.status).toEqual(200)
      expect(response.headers['content-type']).toMatch(/json/)
    })
    it('should respond an array of projects', async () => {
      const response = await request(server).get('/projects')
      expect(response.body).toBeInstanceOf(Array)
    })
  })

  let projectId
  describe('POST /projects', () => {
    it('should get status 200 when save valid project', async () => {
      const response = await request(server)
        .post('/projects')
        .send(project.valid)
      expect(response.body._id).toBeDefined()
      expect(response.status).toEqual(200)
      projectId = response.body._id.valueOf()
    })
    it('should get status 400 when save invalid project', async () => {
      const response = await request(server)
        .post('/projects')
        .send(project.invalidTitle)
      expect(response.body._id).not.toBeDefined()
      expect(response.status).toEqual(400)
    })
  })

  describe('GET /project', () => {
    it('should get 200 when search a saved project', async () => {
      const response = await request(server).get(`/projects/${projectId}`)
      expect(response.status).toEqual(200)
      expect(response.headers['content-type']).toEqual(
        expect.stringContaining('json')
      )
    })
    it('should get the saved project data', async () => {
      const response = await request(server).get(`/projects/${projectId}`)
      const title = response.body.title
      const description = response.body.description
      const initials = response.body.initials

      expect(title).toEqual('my project title is amazing')
      expect(description).toEqual('my first project description is this...')
      expect(initials).toEqual('IBS')
    })
  })

  describe('PUT /project', () => {
    it('should get 200 when updating existing project', async () => {
      const response = await request(server)
        .put(`/projects/${projectId}`)
        .send({ title: 'my new title' })
      expect(response.statusCode).toBe(200)
      expect(response.body._id).toBeDefined()
    })
    it('should get 404 and error message when updating non existing project', async () => {
      const nonExistentId = '626ccddb9975132ed793c611'
      const response = await request(server)
        .put(`/projects/${nonExistentId}`)
        .send({ title: 'best title' })
      expect(response.statusCode).toBe(404)
      expect(response.text).toEqual('{"message":"Project Not Found"}')
    })
  })

  describe('DELETE /project', () => {
    afterAll(async () => {
      await server.close()
    })
    it('should get 200 when delete existing project', async () => {
      const response = await request(server).delete(`/projects/${projectId}`)
      expect(response.statusCode).toBe(200)

      //should not find the deleted project
      const res = await request(server).get(`/projects/${projectId}`)
      expect(res.statusCode).toBe(404)
      expect(res.text).toEqual('{"message":"Project not found"}')
    })
  })
})
