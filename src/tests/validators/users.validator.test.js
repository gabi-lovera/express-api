import user from '../mocks/users.json'
import { isValidUser } from '../../app/validators/users.validator.js'

describe('Validate User', () => {
  it('should return true when check valid user', () => {
    const result = isValidUser(user.valid)
    expect(result).toBe(true)
  })
  it('should return false when check to save invalid username', () => {
    const result = isValidUser(user.invalidUsername)
    expect(result).toBe(false)
  })
  it('should return false when check to update invalid password', () => {
    const result = isValidUser(user.invalidPassword)
    expect(result).toBe(false)
  })
})
