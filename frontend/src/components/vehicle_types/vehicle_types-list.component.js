import React, {useState} from 'react';
import axios from 'axios';
import { Switch, Route, Link } from "react-router-dom";
import AddVehicleType from './add-vehicle_type.component';
import EditVehicleType from './editVehicle_type.component';
import DeleteVehicleType from './deleteVehicle_type.component';


const apiUrl = "http://localhost:5000/vehicle_types";

export default class PaymentTypeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  
      vehicle_types: [],
    }
  }
  


  componentDidMount() {
    axios.get(apiUrl)
      .then(res => {
        const vehicle_types = res.data;
        this.setState({ vehicle_types });
        
      }).catch(err => {
        console.log(err);
      })
  }
  
  render() {
    return (
      <div className="container">

        <div className="mt-3 tableContainer">
          
            <div className="ml-3">
              <div className="row" >  
                <div className="col-1 bpayment tableHeader">Id</div>  
                <div className="col bpayment tableHeader">vehicle_types's name</div>      
              </div>
            </div>

            { this.state.vehicle_types.map(Vehicle_types => 
              <div className="ml-3">
                <div className="row" >  
                  <div className="col-1 bpayment" key={Vehicle_types.id}>{Vehicle_types.id}</div>  
                  <div className="col bpayment">{Vehicle_types.type_name}</div>      
                </div>
              </div>
              )}
        </div>
          <div className="col sidebar-wrapper">
            <div>
              <AddVehicleType/>
            </div>
            <div>
              <EditVehicleType />
            </div>
            <div>
              <DeleteVehicleType/>
            </div>
          </div>
      </div>
    )
  }
}