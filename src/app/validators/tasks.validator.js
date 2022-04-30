import Joi from 'joi'

const taskSchema = Joi.object({
  title: Joi.string().min(40).max(75).required(),
  finished: Joi.boolean(),
  user_id: Joi.string().hex().length(24).required(),
  project_id: Joi.string().hex().length(24).required(),
}).with('user_id', 'project_id')

export const isValidTask = (task) => {
  const { error } = taskSchema.validate(task)
  if (error) return false
  return true
}
