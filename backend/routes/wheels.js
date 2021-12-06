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

  router.get("/", (req,res) => {
    const connection = getConnection()
  
    const queryString = "Select * FROM wheels"
    connection.query(queryString, (error, rows, fields) => {
      if (error) {
        res.sendStatus(500)
        res.end()
      }
  
      const wheels = rows.map((row) => {
        return {
          Id: row.id,
          wheels_name: row.wheels_name,
          wheels_price: row.wheels_price,
          amount: row.amount,          
        }
      })
      res.json(wheels)
    })
  })

  router.post("/create", (req, res) => {
    const connection = getConnection()
  
    const queryString = "INSERT INTO wheels (wheels_name, wheels_price, amount) VALUES (?, ?, ?)"
    connection.query(queryString, [req.body.wheels_name, req.body.wheels_price, req.body.amount], (err, results, fields) => {
      if (err) {
        res.sendStatus(500)
        return
      }
      res.end()
    })
  })

  router.delete("/delete/:id", (req, res) =>{
    const connection = getConnection()

    const queryString = "DELETE FROM wheels WHERE id = ?"
  
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

    const queryString = "UPDATE wheels SET wheels_name = ?, wheels_price = ?, amount = ? WHERE id = ?"
    connection.query(queryString, [req.body.wheels_name, req.body.wheels_price, req.body.amount, req.params.id], (err, results, fields) => {
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

    const queryString = "call addWheelsToWarehouse (?,?)"
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