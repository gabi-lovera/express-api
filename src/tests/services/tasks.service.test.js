import task from '../mocks/tasks.json'
import { prepareTest } from '../util.js'
import {
  findAllTasks,
  saveTask,
  updateTaskDB,
} from '../../app/services/tasks.services.js'

describe('Tasks services', () => {
  prepareTest()

  let taskId
  it('should be contain the saved task', async () => {
    const taskSaved = await saveTask(task.valid)
    taskId = taskSaved._id.valueOf()
    const tasksFound = await findAllTasks()

    expect(tasksFound).toEqual(
      expect.arrayContaining([expect.objectContaining(taskSaved._doc)])
    )
  })
  it('should be update the description and status', async () => {
    const taskUpdated = await updateTaskDB(taskId, {
      description: 'my new description',
      finished: true,
    })
    expect(taskUpdated.description).toBe('my new description')
    expect(taskUpdated.finished).toBe(true)
  })
})
