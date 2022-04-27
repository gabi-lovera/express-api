import mongoose from 'mongoose'
import { redLog, blueLog } from '../utils/logs.js'
import { DB_MONGO_URI } from '../config/index.js'

const connectDB = async () => {
  try {
    await mongoose.connect(DB_MONGO_URI, {
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
