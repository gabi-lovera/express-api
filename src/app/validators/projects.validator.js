import Joi from 'joi'

const projectSchemaOnSave = Joi.object({
  title: Joi.string().min(5).max(50).required(),
  initials: Joi.string().alphanum().min(2).max(8),
  description: Joi.string().min(20).max(255),
  comments: Joi.array().items(
    Joi.object({
      body: Joi.string(),
      date: Joi.date(),
    })
  ),
})

export const isValidProjectToSave = (project) => {
  const { error } = projectSchemaOnSave.validate(project)
  if (error) return false
  return true
}

const projectSchemaOnUpdate = Joi.object({
  title: Joi.string().min(5).max(50),
  description: Joi.string().min(20).max(255),
  comments: Joi.array().items(
    Joi.object({
      body: Joi.string(),
      date: Joi.date(),
    })
  ),
})

export const isValidProjectToUpdate = (project) => {
  const { error } = projectSchemaOnUpdate.validate(project)
  if (error) return false
  return true
}
