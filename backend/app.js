// load our app server using express somehow ...
const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')

const carRoutes = require('./routes/wheels')

// nodemon app.js
app.use(morgan('short'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(express.static('./public'))

app.use('/wheels', carRoutes)

app.use((req, res, next) => {
  // This reads the accept-language header
  // and returns the language if found or false if not
  const lang = req.acceptsLanguages('ru', 'en')
  
  if (lang) { // if found, attach it as property to the request
      req.lang = lang
  } else { // else set the default language
      req.lang = 'en'
  }

  next()
})


app.get("/", (req, res) => {
  console.log("Responding to root route")
  res.send("Hello from ROOOOT")
})

const PORT = process.env.PORT || 5000
// localhost:3003
app.listen(PORT, () => {
  console.log("Server is up and listening on: " + PORT)
})
