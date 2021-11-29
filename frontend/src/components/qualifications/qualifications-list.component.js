import React, {useState} from 'react';
import axios from 'axios';
import { Switch, Route, Link } from "react-router-dom";
import AddQualification from './add-qualification.component';
import EditQuaification from './editQualification.component';
import deleteQuaification from './deleteQuaification.component';


const apiUrl = "http://localhost:5000/quaifications";

export default class QualificationsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  
      quaifications: [],
    }
  }
  


  componentDidMount() {
    axios.get(apiUrl)
      .then(res => {
        const quaifications = res.data;
        this.setState({ quaifications });
        
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
                <div className="col border tableHeader">quaifications's name</div>      
                <div className="col border tableHeader">Order_type's price multiplier</div> 
              </div>
            </div>

            { this.state.quaifications.map(Quaifications => 
              <div className="ml-3">
                <div className="row" >  
                  <div className="col-1 border" key={Quaifications.id}>{Quaifications.id}</div>  
                  <div className="col border">{Quaifications.type_name}</div>      
                  <div className="col border">{Quaifications.koef}</div>
                </div>
              </div>
              )}
        </div>
          <div className="col sidebar-wrapper">
            <div>
              <AddOrderType/>
            </div>
            <div>
              <EditOrderType />
            </div>
            <div>
              <DeleteOrderType/>
            </div>
          </div>
      </div>
    )
  }
}