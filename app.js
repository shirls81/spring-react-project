'use strict'

import path from 'path'
import config from 'config'
import express from 'express'
import bodyParser from 'body-parser'
import api from './routes'

const app = express()
const PORT = process.env.PORT || 8000
const PUBLIC_DIR = path.join(__dirname, 'public')

app.use(bodyParser.json())
app.use('/api', api)
app.use(express.static(PUBLIC_DIR))

app.use((err, req, res, next) => {
  res.status(500).json({
    error: err.message
  })
})

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})

export default app
