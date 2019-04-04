const path = require('path')
const express = require('express')
const PORT = process.env.PORT || 8080
const app = express()
module.exports = app

const createApp = () => {
  // body parsing middleware
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))

  // static file-serving middleware
  app.use(express.static(path.join(__dirname, '..', 'public')))

  // sends index.html
  app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public/index.html'))
  })

  // error handling endware
  app.use((err, req, res, next) => {
    console.error(err)
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error.')
  })
}

const startListening = () => {
  // start listening (and create a 'server' object representing our server)
  const server = app.listen(PORT, () =>
    console.log(`Mixing it up on port ${PORT}`)
  )
}

async function bootApp() {
  await createApp()
  await startListening()
}

// This evaluates as true when this file is run directly from the command line,
if (require.main === module) {
  bootApp()
} else {
  createApp()
}
