import user from '../mocks/users.json'
import { server } from '../../app'
import request from 'supertest'

describe('POST /users', () => {
  xit('should get status 200 on save valid user', async () => {
    const response = await request(server).post('/users').send(user.valid)
    expect(response.body._id).toBeDefined()
    expect(response.status).toEqual(200)
  })
  it('should get status 400 on save invalid user', async () => {
    const response = await request(server)
      .post('/users')
      .send(user.invalidUsername)
    expect(response.body._id).not.toBeDefined()
    expect(response.status).toEqual(400)
  })
})

describe('GET /users', () => {
  afterAll(async () => {
    await server.close()
  })
  it('should receive status 500 when request user with invalid id', async () => {
    const invalidId = '12345'
    const response = await request(server).get(`/users/${invalidId}`)
    expect(response.status).toEqual(500)
  })
  it('should receive status 404 when request user with non existen id', async () => {
    const nonExistentId = '626d72f57eab5c16c39ab463'
    const response = await request(server).get(`/users/${nonExistentId}`)
    expect(response.status).toEqual(404)
    expect(response.text).toEqual('{"message":"User not found"}')
  })
})
