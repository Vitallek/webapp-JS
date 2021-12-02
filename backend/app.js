// load our app server using express somehow ...
const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')

const wheelRoutes = require('./routes/wheels')
const manufacturerRoutes = require('./routes/manufacturers')
const engineRoutes = require('./routes/engines')
const turboRoutes = require('./routes/turbos')
const transmissionRoutes = require('./routes/transmissions')
const vehicle_typesRoutes = require('./routes/vehicle_types')
const payment_typesRoutes = require('./routes/payment_types')
const order_typesRoutes = require('./routes/order_types')
const qualificationRoutes = require('./routes/qualifications')
const employeeRoutes = require('./routes/employees')
const orderRoutes = require('./routes/orders')
const userRoutes = require('./routes/userrrs')
const vehicleModelRoutes = require('./routes/vehicle_models')

// nodemon app.js
app.use(morgan('short'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(express.static('./public'))
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:8081"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "*");
  next();
});

app.use('/wheels', wheelRoutes)
app.use('/manufacturers', manufacturerRoutes)
app.use('/engines', engineRoutes)
app.use('/turbos', turboRoutes)
app.use('/transmissions', transmissionRoutes)
app.use('/vehicle_types', vehicle_typesRoutes)
app.use('/payment_types', payment_typesRoutes)
app.use('/order_types', order_typesRoutes)
app.use('/qualifications', qualificationRoutes)
app.use('/employees', employeeRoutes)
app.use('/orders', orderRoutes)
app.use('/userrrs', userRoutes)
app.use('/vehicle_models', vehicleModelRoutes)

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
// localhost:5000
app.listen(PORT, () => {
  console.log("Server is up and listening on: " + PORT)
})