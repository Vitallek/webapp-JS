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
          vehicle_stock_price: row.vehicle_stock_price,
          car_description: row.car_description,
          is_sold: row.is_sold,
          photo_path: row.photo_path,
        }
      })
      res.json(vehicle_models)
    })
  })

module.exports = router