import mongoose from 'mongoose'
const { Schema, model } = mongoose

const taskSchema = new Schema({
  description: {
    type: String,
    required: true,
  },
  finished: {
    type: Boolean,
    required: true,
    default: false,
  },
  user_id: {
    type: Schema.ObjectId,
    ref: 'User',
    required: true,
  },
  project_id: {
    type: Schema.ObjectId,
    ref: 'Project',
    required: true,
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
})

export default model('Task', taskSchema)
