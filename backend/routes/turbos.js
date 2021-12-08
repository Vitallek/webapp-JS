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

    const queryString = "Select * FROM turbosforuser"
    connection.query(queryString, (error, rows, fields) => {
      if (error) {
        res.sendStatus(500)
        res.end()
      }

      const turbosforuser = rows.map((row) => {
        return {
          id: row.id,
          turbo_name: row.turbo_name,
          turbo_price: row.turbo_price,
        }
      })
      res.json(turbosforuser)
    })
  })
  router.get("/", (req,res) => {
    const connection = getConnection()
  
    const queryString = "Select * FROM turbos"
    connection.query(queryString, (error, rows, fields) => {
      if (error) {
        res.sendStatus(500)
        res.end()
      }
  
      const turbos = rows.map((row) => {
        return {
          id: row.id,
          turbo_name: row.turbo_name,
          turbo_price: row.turbo_price,
          amount: row.amount,
        }
      })
      res.json(turbos)
    })
  })

  router.post("/create", (req, res) => {
    const connection = getConnection()
  
    const queryString = "INSERT INTO turbos (turbo_name, turbo_price, amount) VALUES (?, ?, ?)"
    connection.query(queryString, [req.body.turbo_name, req.body.turbo_price, req.body.amount], (err, results, fields) => {
      if (err) {
        res.sendStatus(500)
        return
      }
      res.end()
    })
  })

  router.delete("/delete/:id", (req, res) =>{
    const connection = getConnection()

    const queryString = "DELETE FROM turbos WHERE id = ?"
  
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

    const queryString = "UPDATE turbos SET turbo_name = ?, turbo_price = ?, amount = ? WHERE id = ?"
    connection.query(queryString, [req.body.turbo_name, req.body.turbo_price, req.body.amount, req.params.id], (err, results, fields) => {
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

    const queryString = "call addTurbosToWarehouse (?,?)"
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