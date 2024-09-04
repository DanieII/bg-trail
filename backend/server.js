const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

mongoose.connect('mongodb://bg-trail-db/bg-trail', {})