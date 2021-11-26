import React, {useState} from 'react';
import axios from 'axios';
import { Switch, Route, Link } from "react-router-dom";
import AddManufacturer from './add-manufacturer.component';
import EditManufacturer from './editManufacturer.component';
import DeleteManufacturer from './deleteManufacturer.component';

export default class ManufacturerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      
      manufacturers: []
    }
  }
  


  componentDidMount() {
    axios.get('http://localhost:5000/manufacturers')
      .then(res => {
        const manufacturers = res.data;
        this.setState({ manufacturers });
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
                <div className="col-1 border tableHeader">Id</div>  
                <div className="col border tableHeader">manufacturers_name</div>        
              </div>
            </div>

            { this.state.manufacturers.map(Manufacturers => 
              <div className="ml-3">
                <div className="row" >  
                  <div className="col-1 border" key={Manufacturers.id}>{Manufacturers.id}</div>  
                  <div className="col border">{Manufacturers.companyName}</div>          
                </div>
              </div>
              )}
        </div>
          <div className="col sidebar-wrapper">
            <div>
              <AddManufacturer/>
            </div>
            <div>
              <EditManufacturer />
            </div>
            <div>
              <DeleteManufacturer/>
            </div>
          </div>
      </div>
    )
  }
}