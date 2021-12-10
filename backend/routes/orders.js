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
  
    const queryString = "Select * FROM orders"
    connection.query(queryString, (error, rows, fields) => {
      if (error) {
        res.sendStatus(500)
        res.end()
      }
  
      const orders = rows.map((row) => {
        return {
          id: row.id,
          shop_name: row.shop_name,
          emp_id: row.emp_id,
          vehicle_id: row.vehicle_id,
          order_date: row.order_date,
          order_price: row.order_price,
          order_type: row.order_type,
          payment_type: row.payment_type,
          customer_email: row.customer_email,
          price: row.price,
        }
      })
      res.json(orders)
    })
  })

  router.get("/get/:email", (req,res) => {
    const connection = getConnection()
  
    const queryString = "Select * FROM ordersforusers where customer_email = ?"
    connection.query(queryString, [req.params.email],(error, rows, fields) => {
      if (error) {
        res.sendStatus(500)
        res.end()
      }
  
      const orders = rows.map((row) => {
        return {
          order_status: row.order_status,
          id: row.id,
          shop_name: row.shop_name,
          price: row.price,
          order_date: row.order_date,
          order_price: row.order_price,
          order_type: row.order_type,
          payment_type: row.payment_type,
          customer_email: row.customer_email,
          emp_id: row.id,
          model_name: row.model_name,
          wheels_name: row.wheels_name,
          engine_name: row.engine_name,
          turbo_name: row.turbo_name,
          transmission_name: row.transmission_name,
        }
      })
      res.json(orders)
    })
  })

  router.post("/create", (req, res) => {
    const connection = getConnection()
  
    const queryString = "call createOrder(?,?,?,?,?,?,?,?,?,?)"
    connection.query(queryString, [req.body.shop_name, req.body.vehicle_id, req.body.order_date, req.body.order_type, req.body.payment_type, req.body.customer_email, req.body.engineID, req.body.wheelsID, req.body.transmissionID, req.body.turboID], (err, results, fields) => {
      console.log(req)
      if (err) {
        res.sendStatus(500)
        console.log(err)
        return
      }
      res.end()
    })
  })



  router.delete("/delete/:id", (req, res) =>{
    const connection = getConnection()

    const queryString = "DELETE FROM orders WHERE id = ?"
  
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

    const queryString = "UPDATE orders SET shop_name = ?, emp_id = ?, vehicle_id=?, order_date = ?, order_type = ?, payment_type=?, customer_email=?, status=?, price=? WHERE id = ?"
    connection.query(queryString, [req.body.shop_name, req.body.order_date, req.body.emp_id, req.body.order_type, req.body.payment_type, req.body.customer_email, req.body.vehicle_id,req.body.status, req.body.price,req.params.id], (err, results, fields) => {
      if (err) {
        console.log(err)
        res.sendStatus(500)
        return
      }
      res.end()
    })
  })


module.exports = router