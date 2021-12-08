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
  
    const queryString = "select * from carforuser"
    connection.query(queryString, (error, rows, fields) => {
      if (error) {
        res.sendStatus(500)
        res.end()
      }
  
      const showCars = rows.map((row) => {
        return {
          id: row.id,
          company_name: row.company_name,
          model_name: row.model_name,
          wheels_name: row.wheels_name,
          engine_name: row.engine_name,
          transmission_name: row.transmission_name,
          turbo_name: row.turbo_name,
          vin: row.vin,
          vehicle_stock_price: row.vehicle_stock_price,
          car_description: row.car_description,
          photo_path: row.photo_path,
        }
      })
      res.json(showCars)
    })
  })

  router.get("/:id", (req,res) => {
    const connection = getConnection()
  
    const queryString = "select * from carforuser where id = ?"
    connection.query(queryString, [req.params.id], (error, rows, fields) => {
      if (error) {
        res.sendStatus(500)
        res.end()
      }
  
      const showCars = rows.map((row) => {
        return {
          id: row.id,
          company_name: row.company_name,
          model_name: row.model_name,
          wheels_name: row.wheels_name,
          engine_name: row.engine_name,
          transmission_name: row.transmission_name,
          turbo_name: row.turbo_name,
          vin: row.vin,
          vehicle_stock_price: row.vehicle_stock_price,
          car_description: row.car_description,
          photo_path: row.photo_path,
        }
      })
      res.json(showCars)
    })
  })

module.exports = router