require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const { PerclScript, Say, Pause, Hangup } = require('@freeclimb/sdk')

app.use(bodyParser.json())
var port = process.env.PORT || 80


app.post('/incomingCall', (req, res) => {
  res.status(200).json(new PerclScript({
    commands: [
      new Say({ text: "Hello. Thank you for invoking the accept incoming call tutorial." }),
      new Pause({ length: 100 }),
      new Say({ text: "Goodbye" }),
      new Hangup({})
    ]
  }).build())
})

app.post('/status', (req, res) => {
  res.status(200)
})

app.listen(port, () => {
  console.log(`Starting server on port ${port}`)
})