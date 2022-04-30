import Joi from 'joi'

const userSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
  repeat_password: Joi.ref('password'),
  birth_year: Joi.number().integer().min(1900).max(2013),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'net'] },
    })
    .required(),
}).with('name', 'email')

export const isValidUser = (user) => {
  const { error } = userSchema.validate(user)
  if (error) {
    console.log(error.details[0].message)
    return false
  }
  return true
}
