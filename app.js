'use strict'

import config from 'express'
import express from 'express'
import bodyParser from 'bodyParser'
import api from './routes'

const app = express()
const PORT = config.port

// Here's where the magic happens. Any middleware after this have access to
// `req.body` for those requests that come through as `json` bodies with the
// `Content-Type: application/json` header
app.use(bodyParser.json())
app.use('/api', api)

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
