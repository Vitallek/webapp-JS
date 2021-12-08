// load our app server using express somehow ...
const express = require('express')
const mysql = require("mysql");
const morgan = require('morgan')

const bodyParser = require('body-parser')
const cookieParser = require("cookie-parser");
const session = require("express-session");


const bcrypt = require("bcrypt");
const saltRounds = 10;

const app = express()

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

const vehiclesForUser = require('./routes/vehiclesListForUsers')

// nodemon app.js
app.use(morgan('short'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(express.static('./public'))
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:8081"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, PUT, GET, OPTIONS");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

app.use(
  session({
    key: "Token",
    secret: "super_Secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);

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

app.use('/cars',vehiclesForUser)

app.use(cookieParser());

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

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "7557475",
  database: "autoshop",
});

app.post("/register", (req, res) => {
  const FnameLname = req.body.FnameLname;
  const email = req.body.email;
  const password = req.body.password;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
    }

    db.query(
      `INSERT INTO userrrs (fnameLname,email, password,role) VALUES ('${FnameLname}','${email}','${hash}','user')`, (err, res) => {
        if (err) {
          console.log(err)
          return(err)
          // return res.status(400).send({
          //   msg: err
          // });
        }
      }
    );
    
    return res.status(201).send({
      msg: 'The user has been registerd with us!'
    }); 
  });
});

app.get("/logout", (req, res, next) => {
  res.clearCookie('Token', { path: '/' })
  res.status(200).send({msg: 'Logout complete'})
  next()
});

app.get("/login", (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query(
    "SELECT * FROM userrrs WHERE email = ?;",
    email,
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }

      if (result.length > 0) {
        bcrypt.compare(password, result[0].password, (error, response) => {
          if (response) {
            req.session.user = result;
            console.log(req.session.user);
            res.send(result);
          } else {
            res.send({ message: "Wrong email/password combination!" });
          }
        });
      } else {
        res.send({ message: "User doesn't exist" });
      }
    }
  );
});

const PORT = process.env.PORT || 5000
// localhost:5000
app.listen(PORT, () => {
  console.log("Server is up and listening on: " + PORT)
})