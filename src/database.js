import mongoose from 'mongoose'
import { redLog, blueLog } from './utils/logs.js'

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    blueLog('Successfully connected to MongoDB.')
  } catch (err) {
    redLog(err)
    process.exit(1)
  }
}

export default connectDB
