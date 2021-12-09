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
  
    const queryString = "Select * FROM order_types"
    connection.query(queryString, (error, rows, fields) => {
      if (error) {
        res.sendStatus(500)
        res.end()
      }
  
      const order_types = rows.map((row) => {
        return {
          id: row.id,
          type_name: row.type_name,
          koef: row.koef,
        }
      })
      res.json(order_types)
    })
  })

  router.get("/view", (req,res) => {
    const connection = getConnection()
  
    const queryString = "Select * FROM orderTypesForUser"
    connection.query(queryString, (error, rows, fields) => {
      if (error) {
        res.sendStatus(500)
        res.end()
      }
  
      const orderTypesForUser = rows.map((row) => {
        return {
          id: row.id,
          type_name: row.type_name,
          koef: row.koef,
        }
      })
      res.json(orderTypesForUser)
    })
  })

  router.post("/create", (req, res) => {
    const connection = getConnection()
  
    const queryString = "INSERT INTO order_types (type_name, koef) VALUES (?, ?)"
    connection.query(queryString, [req.body.type_name, req.body.koef], (err, results, fields) => {
      if (err) {
        res.sendStatus(500)
        return
      }
      res.end()
    })
  })

  router.delete("/delete/:id", (req, res) =>{
    const connection = getConnection()

    const queryString = "DELETE FROM order_types WHERE id = ?"
  
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

    const queryString = "UPDATE order_types SET type_name = ?, koef = ? WHERE id = ?"
    connection.query(queryString, [req.body.type_name,req.body.koef, req.params.id], (err, results, fields) => {
      if (err) {
        console.log(err)
        res.sendStatus(500)
        return
      }
      res.end()
    })
  })


module.exports = router