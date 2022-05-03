import project from '../mocks/projects.json'
import {
  isValidProjectToSave,
  isValidProjectToUpdate,
} from '../../app/validators/projects.validator.js'

describe('Validate Project', () => {
  it('should return true when check valid project', () => {
    const result = isValidProjectToSave(project.valid)
    expect(result).toBe(true)
  })
  it('should return false when check to save invalid project', () => {
    const result = isValidProjectToSave(project.invalidTitle)
    expect(result).toBe(false)
  })
  it('should return false when check to update invalid project', () => {
    const result = isValidProjectToUpdate(project.invalidInitials)
    expect(result).toBe(false)
  })
})
