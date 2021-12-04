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
  
    const queryString = "Select * FROM transmissions"
    connection.query(queryString, (error, rows, fields) => {
      if (error) {
        res.sendStatus(500)
        res.end()
      }
  
      const transmissions = rows.map((row) => {
        return {
          id: row.id,
          transmission_name: row.transmission_name,
          transmission_price: row.transmission_price,
          amount: row.amount,
        }
      })
      res.json(transmissions)
    })
  })

  router.post("/create", (req, res) => {
    const connection = getConnection()
  
    const queryString = "INSERT INTO transmissions (transmission_name, transmission_price, amount) VALUES (?, ?,?)"
    connection.query(queryString, [req.body.transmission_name, req.body.transmission_price, req.body.amount], (err, results, fields) => {
      if (err) {
        res.sendStatus(500)
        return
      }
      res.end()
    })
  })

  router.delete("/delete/:id", (req, res) =>{
    const connection = getConnection()

    const queryString = "DELETE FROM transmissions WHERE id = ?"
  
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

    const queryString = "UPDATE transmissions SET transmission_name = ?, transmission_price = ?, amount = ? WHERE id = ?"
    connection.query(queryString, [req.body.transmission_name, req.body.transmission_price, req.body.amount, req.params.id], (err, results, fields) => {
      if (err) {
        console.log(err)
        res.sendStatus(500)
        return
      }
      res.end()
    })
  })


module.exports = router