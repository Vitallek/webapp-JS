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
  
    const queryString = "Select * FROM userrrs"
    connection.query(queryString, (error, rows, fields) => {
      if (error) {
        res.sendStatus(500)
        res.end()
      }
  
      const userrrs = rows.map((row) => {
        return {
          id: row.id,
          FnameLname: row.FnameLname,
          email: row.email,
          password: row.password,
          role: row.role,
        }
      })
      res.json(userrrs)
    })
  })

  router.post("/create", (req, res) => {
    const connection = getConnection()
  
    const queryString = "INSERT INTO userrrs (FnameLname, email, password, role) VALUES (?, ?, ?, ?)"
    connection.query(queryString, [req.body.FnameLname, req.body.email, req.body.password, req.body.role], (err, results, fields) => {
      if (err) {
        res.sendStatus(500)
        return
      }
      res.end()
    })
  })

  router.delete("/delete/:id", (req, res) =>{
    const connection = getConnection()

    const queryString = "DELETE FROM userrrs WHERE id = ?"
  
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

    const queryString = "UPDATE userrrs SET FnameLname = ?, email = ?, role=? WHERE id = ?"
    connection.query(queryString, [req.body.FnameLname, req.body.email, req.body.role, req.params.id], (err, results, fields) => {
      if (err) {
        console.log(err)
        res.sendStatus(500)
        return
      }
      res.end()
    })
  })


module.exports = router