import task from '../mocks/tasks.json'
import { server } from '../../app'
import request from 'supertest'

describe('Tasks routes', () => {
  describe('GET /tasks', () => {
    it('should be respond with a 200 status code', async () => {
      const response = await request(server).get('/tasks').send()
      expect(response.statusCode).toBe(200)
      expect(response.headers['content-type']).toMatch(/json/)
      expect(response.body).toBeInstanceOf(Array)
    })
  })

  describe('POST /task', () => {
    it('should get status 200 when save valid task', async () => {
      const response = await request(server).post('/tasks').send(task.valid)
      expect(response.body._id).toBeDefined()
      expect(response.status).toEqual(200)
    })
    it('should get status 400 when save invalid task', async () => {
      const response = await request(server)
        .post('/tasks')
        .send(task.invalidStatus)
      expect(response.body._id).not.toBeDefined()
      expect(response.status).toEqual(400)
    })
  })

  describe('PUT /task', () => {
    afterAll(async () => {
      await server.close()
    })

    it('should get 404 and error message when updating non existing task', async () => {
      const nonExistentId = '626ccddb9975132ed793c612'
      const toUpdate = { finished: true }
      const response = await request(server)
        .put(`/tasks/${nonExistentId}`)
        .send(toUpdate)
      expect(response.statusCode).toBe(404)
      expect(response.text).toEqual('{"message":"Task Not Found"}')
    })
  })
})
