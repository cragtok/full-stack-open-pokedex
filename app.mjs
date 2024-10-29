import express from 'express'
import process from 'node:process'

const { static: expressStatic } = express
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5000

app.use(expressStatic('dist'))

app.get('/version', (req, res) => {
  res.send('1') // change this string to ensure a new version deployed
})

app.get('/health', (req, res) => {
  res.send('ok')
})

app.listen(PORT, () => {
  /* eslint-disable */
  console.log(`server started on port ${PORT}`)
})
