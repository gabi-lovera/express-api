import mongoose from 'mongoose'
import connectDB from '../databases/mongodb.js'

export const prepareTest = () => {
  beforeAll(async () => {
    await connectDB()
  })
  afterAll(async () => {
    await mongoose.disconnect()
  })
}
