const express = require('express')
const path = require('path')
const helmet = require('helmet')

const app = express()

app.use(helmet())

app.use(express.static(path.join(__dirname, 'client')))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname,'client','index.html'))
})

app.listen(8080, function () {
  console.log('app listening on port 8080')
})