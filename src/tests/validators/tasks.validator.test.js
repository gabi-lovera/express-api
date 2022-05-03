import task from '../mocks/tasks.json'
import {
  isValidTaskToSave,
  isValidTaskToUpdate,
} from '../../app/validators/tasks.validator.js'

describe('Validate Task', () => {
  it('should return true when check valid task', () => {
    const result = isValidTaskToSave(task.valid)
    expect(result).toBe(true)
  })
  it('should return false when check to save task with invalid title', () => {
    const result = isValidTaskToSave(task.invalidTitle)
    expect(result).toBe(false)
  })
  it('should return false when check to update task with invalid status', () => {
    const result = isValidTaskToUpdate(task.invalidStatus)
    expect(result).toBe(false)
  })
  it('should return false when check to update task with invalid user_id', () => {
    const result = isValidTaskToUpdate(task.invalidUserId)
    expect(result).toBe(false)
  })
  it('should return false when check to update task with invalid project_id', () => {
    const result = isValidTaskToUpdate(task.invalidProjectId)
    expect(result).toBe(false)
  })
})
