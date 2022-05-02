import 'dotenv/config'

const PORT = process.env.PORT || 3000
let DB_MONGO_URI

if (process.env.NODE_ENV === 'development') {
  DB_MONGO_URI = process.env.DB_MONGO_URI_DEV
} else if (process.env.NODE_ENV === 'local_test_suite') {
  DB_MONGO_URI = process.env.DB_MONGO_URI_TEST_SUITE
}

export { PORT, DB_MONGO_URI }
