import React, {useState} from 'react';
import axios from 'axios';
import { Switch, Route, Link } from "react-router-dom";
import AddPaymentType from './add-payment_type.component';
import EditPaymentType from './editPayment_type.component';
import DeletePaymentType from './deletePayment-type.component';


const apiUrl = "http://localhost:5000/payment_types";

export default class PaymentTypeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  
      payment_types: [],
    }
  }
  


  componentDidMount() {
    axios.get(apiUrl)
      .then(res => {
        const payment_types = res.data;
        this.setState({ payment_types });
        
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
                <div className="col bpayment tableHeader">payment_types's name</div>      
              </div>
            </div>

            { this.state.payment_types.map(Payment_types => 
              <div className="ml-3">
                <div className="row" >  
                  <div className="col-1 bpayment" key={Payment_types.id}>{Payment_types.id}</div>  
                  <div className="col bpayment">{Payment_types.type_name}</div>      
                </div>
              </div>
              )}
        </div>
          <div className="col sidebar-wrapper">
            <div>
              <AddPaymentType/>
            </div>
            <div>
              <EditPaymentType />
            </div>
            <div>
              <DeletePaymentType/>
            </div>
          </div>
      </div>
    )
  }
}