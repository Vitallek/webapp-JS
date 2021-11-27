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
  
    const queryString = "Select * FROM vehicle_models"
    connection.query(queryString, (error, rows, fields) => {
      if (error) {
        res.sendStatus(500)
        res.end()
      }
  
      const vehicle_models = rows.map((row) => {
        return {
          id: row.id,
          model_name: row.model_name,
          manufacturer_id: row.manufacturer_id,
          vin: row.vin,
          type_id: row.type_id,
          engine_id: row.engine_id,
          transmission_id: row.transmission_id,
          turbo_id: row.turbo_id,
          wheels_id: row.wheels_id,
          deliver_date: row.whedeliver_dateels_id,
          vehicle_stock_price: row.vehicle_stock_price,
          car_description: row.car_description,
          is_sold: row.is_sold,
        }
      })
      res.json(vehicle_models)
    })
  })

  router.post("/create", (req, res) => {
    const connection = getConnection()
  
    const queryString = "INSERT INTO vehicle_models (model_name, manufacturer_id, vin, type_id ,engine_id, transmission_id, turbo_id, wheels_id, deliver_date, vehicle_stock_price, car_description, is_sold) VALUES (?, ?, ?, ? ,? ,? ,? , ?, ?, ?, ?, ?, ?)"
    connection.query(queryString, [req.body.model_name, req.body.manufacturer_id, req.body.vin, req.body.type_id, req.body.engine_id, req.body.transmission_id, req.body.turbo_id, req.body.wheels_id, req.body.deliver_date, req.body.vehicle_stock_price, req.body.vehicle_stock_price, req.body.car_description, req.body.is_sold], (err, results, fields) => {
      if (err) {
        res.sendStatus(500)
        return
      }
      res.end()
    })
  })

  router.delete("/delete/:id", (req, res) =>{
    const connection = getConnection()

    const queryString = "DELETE FROM vehicle_models WHERE id = ?"
  
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

    const queryString = "UPDATE vehicle_models SET model_name = ?, manufacturer_id = ?, vin = ?, type_id = ?, engine_id = ?, transmission_id=?, turbo_id=?, wheels_id=? ,deliver_date=?, vehicle_stock_price=?, car_description=?, is_sold=? WHERE id = ?"
    connection.query(queryString, [req.body.model_name, req.body.manufacturer_id, req.body.vin, req.body.type_id, req.body.engine_id, req.body.transmission_id, req.body.turbo_id, req.body.wheels_id, req.body.deliver_date, req.body.vehicle_stock_price, req.body.vehicle_stock_price, req.body.car_description, req.body.is_sold, req.params.id], (err, results, fields) => {
      if (err) {
        console.log(err)
        res.sendStatus(500)
        return
      }
      res.end()
    })
  })


module.exports = router