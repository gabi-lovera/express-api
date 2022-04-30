import Joi from 'joi'

const projectSchema = Joi.object({
  title: Joi.string().min(10).max(50).required(),
  initials: Joi.string().alphanum().min(2).max(8),
  description: Joi.string().min(30).max(255),
  comments: Joi.array().items(
    Joi.object({
      body: Joi.string(),
      date: Joi.date(),
    })
  ),
})

export const isValidProject = (project) => {
  const { error } = projectSchema.validate(project)
  if (error) {
    console.log(error.details[0].message)
    return false
  }
  return true
}
