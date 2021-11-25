import React, {useState} from 'react';
import axios from 'axios';
import { Switch, Route, Link } from "react-router-dom";
import AddWheel from './add-wheel.component';
import EditWheel from './editWheel.component';
import DeleteWheel from './deleteWheel.component';


const apiUrl = "http://localhost:5000/wheels";

export default class WheelList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      
      wheels: []
    }
  }
  


  componentDidMount() {
    axios.get(apiUrl)
      .then(res => {
        const wheels = res.data;
        this.setState({ wheels });
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
                <div className="col border tableHeader">Wheels_name</div>      
                <div className="col border tableHeader">Wheels_price</div>    
              </div>
            </div>

            { this.state.wheels.map(Wheels => 
              <div className="ml-3">
                <div className="row" >  
                  <div className="col-1 border" key={Wheels.Id}>{Wheels.Id}</div>  
                  <div className="col border">{Wheels.wheels_name}</div>      
                  <div className="col border">{Wheels.wheels_price}</div>    
                </div>
              </div>
              )}
        </div>
          <div className="col sidebar-wrapper">
            <div>
              <AddWheel/>
            </div>
            <div>
              <EditWheel />
            </div>
            <div>
              <DeleteWheel/>
            </div>
          </div>
      </div>
    )
  }
}