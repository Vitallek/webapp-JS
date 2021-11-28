import React, {useState} from 'react';
import axios from 'axios';
import { Switch, Route, Link } from "react-router-dom";
import AddVehicleModel from './add-vehicle_model.component';
import EditVehicleModels from './editVehicle_model.component';
import DeleteVehicleModel from './deleteVehicle_model.component';


const apiUrl = "http://localhost:5000/vehicle_models";

export default class VehicleModelList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  
      vehicle_models: [],
    }
  }
  


  componentDidMount() {
    axios.get(apiUrl)
      .then(res => {
        const vehicle_models = res.data;
        this.setState({ vehicle_models });
        
      }).catch(err => {
        console.log(err);
      })
  }
  
  render() {
    return (
      <div className="container">

        <div className="mt-3 carTableContainer">
          
            <div className="ml-3">
              <div className="row" >  
                <div className="carCol border tableHeader">Id</div>  
                <div className="carCol border tableHeader">model name</div>      
                <div className="carCol border tableHeader">manufacturer id</div> 
                <div className="carCol border tableHeader">vin</div>     
                <div className="carCol border tableHeader">type id</div>     
                <div className="carCol border tableHeader">engine id</div>     
                <div className="carCol border tableHeader">transmission id</div>     
                <div className="carCol border tableHeader">turbo id</div>     
                <div className="carCol border tableHeader">wheels_id</div>     
                <div className="carCol border tableHeader">price</div>     
                <div className="carCol border tableHeader">description</div>     
                <div className="carCol border tableHeader">availability</div>
                <div className="carCol border tableHeader">photo</div>     
              </div>
            </div>

            { this.state.vehicle_models.map(Vehicle_models => 
              <div className="ml-3">
                <div className="row" >  
                  <div className="carCol border" key={Vehicle_models.id}>{Vehicle_models.id}</div>  
                  <div className="carCol border">{Vehicle_models.model_name}</div> 
                  <div className="carCol border">{Vehicle_models.manufacturer_id}</div>          
                  <div className="carCol border">{Vehicle_models.vin}</div>          
                  <div className="carCol border">{Vehicle_models.type_id}</div>          
                  <div className="carCol border">{Vehicle_models.engine_id}</div>          
                  <div className="carCol border">{Vehicle_models.transmission_id}</div>          
                  <div className="carCol border">{Vehicle_models.turbo_id}</div>          
                  <div className="carCol border">{Vehicle_models.wheels_id}</div>          
                  <div className="carCol border">{Vehicle_models.vehicle_stock_price}</div>          
                  <div className="carCol border">{Vehicle_models.car_description}</div>          
                  <div className="carCol border">{Vehicle_models.is_sold}</div>          
                  <div className="carCol border">{Vehicle_models.photo_path}</div>                   
                </div>
              </div>
              )}
        </div>
          <div className="col sidebar-wrapper">
            <div>
              <AddVehicleModel/>
            </div>
            <div>
              <EditVehicleModels />
            </div>
            <div>
              <DeleteVehicleModel/>
            </div>
          </div>
      </div>
    )
  }
}