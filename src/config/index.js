import 'dotenv/config'

const PORT = process.env.PORT || 3000
const DB_MONGO_URI = process.env.DB_MONGO_URI

export { PORT, DB_MONGO_URI }
