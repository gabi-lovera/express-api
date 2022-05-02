import Joi from 'joi'

const taskSchemaOnSave = Joi.object({
  description: Joi.string().min(20).max(75).required(),
  finished: Joi.boolean(),
  user_id: Joi.string().hex().length(24).required(),
  project_id: Joi.string().hex().length(24).required(),
}).with('user_id', 'project_id')

export const isValidTaskToSave = (task) => {
  const { error } = taskSchemaOnSave.validate(task)
  if (error) {
    console.log(error.details[0].message)
    return false
  }
  return true
}

const taskSchemaOnUpdate = Joi.object({
  description: Joi.string().min(20).max(75),
  finished: Joi.boolean(),
})

export const isValidTaskToUpdate = (task) => {
  const { error } = taskSchemaOnUpdate.validate(task)
  if (error) return false
  return true
}
