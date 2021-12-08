// will contain all of my user related routes
const express = require('express')
const mysql = require('mysql')
const router = express.Router()

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '7557475',
    database: 'autoshop'
})

function getConnection() {
    return pool
}

  router.get("/view", (req,res) => {
    const connection = getConnection()

    const queryString = "Select * FROM enginesforuser"
    connection.query(queryString, (error, rows, fields) => {
      if (error) {
        res.sendStatus(500)
        res.end()
      }

      const enginesforuser = rows.map((row) => {
        return {
          id: row.id,
          engine_name: row.engine_name,
          engine_price: row.engine_price,
        }
      })
      res.json(enginesforuser)
    })
  })

  router.get("/", (req,res) => {
    const connection = getConnection()
  
    const queryString = "Select * FROM car_engines"
    connection.query(queryString, (error, rows, fields) => {
      if (error) {
        res.sendStatus(500)
        res.end()
      }
  
      const car_engines = rows.map((row) => {
        return {
          id: row.id,
          engine_name: row.engine_name,
          engine_price: row.engine_price,
          amount: row.amount,
        }
      })
      res.json(car_engines)
    })
  })

  router.post("/create", (req, res) => {
    const connection = getConnection()
  
    const queryString = "INSERT INTO car_engines (engine_name, engine_price, amount) VALUES (?, ?, ?)"
    connection.query(queryString, [req.body.engine_name, req.body.engine_price, req.body.amount], (err, results, fields) => {
      if (err) {
        res.sendStatus(500)
        return
      }
      res.end()
    })
  })

  router.delete("/delete/:id", (req, res) =>{
    const connection = getConnection()

    const queryString = "DELETE FROM car_engines WHERE id = ?"
  
    connection.query(queryString, [req.params.id], (error, rows, fields) => {
      if (error) {
        res.sendStatus(500)
      }
      res.end()

    })
  })

  router.put("/update/:id", (req, res) => {
    const connection = getConnection()

    console.log("updated")

    const queryString = "UPDATE car_engines SET engine_name = ?, engine_price = ?, amount = ? WHERE id = ?"
    connection.query(queryString, [req.body.engine_name, req.body.engine_price, req.body.amount, req.params.id], (err, results, fields) => {
      if (err) {
        console.log(err)
        res.sendStatus(500)
        return
      }
      res.end()
    })
  })

  router.put("/add", (req, res) => {
    const connection = getConnection()

    console.log("updated")

    const queryString = "call addEnginesToWarehouse (?,?)"
    connection.query(queryString, [req.body.howMany, req.body.id], (err, results, fields) => {
      if (err) {
        console.log(err)
        res.sendStatus(500)
        return
      }
      res.end()
    })
  })


module.exports = router