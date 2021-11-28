import React, {useState} from 'react';
import axios from 'axios';
import { Switch, Route, Link } from "react-router-dom";
import AddOrder from './add-order.component';
import Editorder from './editOrder.component';
import DeleteOrder from './deleteOrder.component';


const apiUrl = "http://localhost:5000/orders";

export default class OrdersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  
      orders: [],
    }
  }
  


  componentDidMount() {
    axios.get(apiUrl)
      .then(res => {
        const orders = res.data;
        this.setState({ orders });
        
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
                <div className="col border tableHeader">Shop Name</div> 
                <div className="col border tableHeader">Emp id</div>      
                <div className="col border tableHeader">vehicle id</div>      
                <div className="col border tableHeader">order_date</div>      
                <div className="col border tableHeader">order_price</div>      
                <div className="col border tableHeader">order_type</div>      
                <div className="col border tableHeader">payment_type</div>      
                <div className="col border tableHeader">customer_id</div>             
              </div>
            </div>

            { this.state.orders.map(Orders => 
              <div className="ml-3">
                <div className="row" >  
                  <div className="col-1 border" key={Orders.id}>{Orders.id}</div>  
                  <div className="col border">{Orders.shop_name}</div>
                  <div className="col border">{Orders.emp_id}</div>         
                  <div className="col border">{Orders.shop_name}</div>         
                  <div className="col border">{Orders.vehicle_id}</div>         
                  <div className="col border">{Orders.order_date}</div>         
                  <div className="col border">{Orders.order_price}</div>         
                  <div className="col border">{Orders.payment_type}</div>         
                  <div className="col border">{Orders.customer_id}</div>         
         
                </div>
              </div>
              )}
        </div>
          <div className="col sidebar-wrapper">
            <div>
              <AddOrder/>
            </div>
            <div>
              <Editorder />
            </div>
            <div>
              <DeleteOrder/>
            </div>
          </div>
      </div>
    )
  }
}