import express, { static as st } from 'express'
import process from 'node:process'

const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5000

app.use(st('dist'))

app.listen(PORT, () => {
  /* eslint-disable */
  console.log(`server started on port ${PORT}`)
})
