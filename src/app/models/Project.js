import mongoose from 'mongoose'
const { Schema, model } = mongoose

const projectSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  initials: {
    type: String,
    required: false,
  },
  created: {
    type: Date,
    required: true,
    default: Date.now,
  },
  modified: {
    type: Date,
    required: true,
    default: Date.now,
  },
  comments: [
    {
      body: String,
      date: Date,
    },
  ],
})

export default model('Project', projectSchema)
