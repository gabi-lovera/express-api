import { prepareTest } from '../util.js'
import user from '../mocks/users.json'
import {
  findUserInDB,
  saveUserInDB,
} from '../../app/services/users.services.js'

describe.skip('Users services', () => {
  prepareTest()
  it('should be the same email as the saved user', async () => {
    const userSaved = await saveUserInDB(user.valid)
    const userId = userSaved._id.valueOf()
    const userFound = await findUserInDB(userId)

    expect(userSaved.email).toBe(userFound.email)
  })
})
