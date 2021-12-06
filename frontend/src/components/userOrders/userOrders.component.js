import React from 'react';
import axios from 'axios';
import AddUserOrder from './addUserOrder.component';
import DeleteUserOrder from './deleteUserOrder.component';

const apiUrl = "http://localhost:5000/orders";

export default class UserOrders extends React.Component {
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
      <div>
        <div className="adminContainer">

          <div className="orderTableContainer">
            
              <div className="ml-3">
                <div className="row" >  
                  <div className="ordercol border tableHeader">Id</div>  
                  <div className="ordercol border tableHeader">Shop Name</div> 
                  <div className="ordercol border tableHeader">Emp id</div>      
                  <div className="ordercol border tableHeader">vehicle id</div>      
                  <div className="ordercol border tableHeader">order_date</div>      
                  <div className="ordercol border tableHeader">order_price</div>      
                  <div className="ordercol border tableHeader">order_type</div>      
                  <div className="ordercol border tableHeader">payment_type</div>      
                  <div className="ordercol border tableHeader">customer_id</div>             
                </div>
              </div>

              { this.state.orders.map(Orders => 
                <div className="ml-3" key={Orders.id}>
                  <div className="row" >  
                    <div className="ordercol border">{Orders.id}</div>  
                    <div className="ordercol border">{Orders.shop_name}</div>
                    <div className="ordercol border">{Orders.emp_id}</div>                  
                    <div className="ordercol border">{Orders.vehicle_id}</div>         
                    <div className="ordercol border">{Orders.order_date}</div>         
                    <div className="ordercol border">{Orders.order_price}</div>    
                    <div className="ordercol border">{Orders.order_type}</div>     
                    <div className="ordercol border">{Orders.payment_type}</div>         
                    <div className="ordercol border">{Orders.customer_id}</div>         
          
                  </div>
                </div>
                )}
          </div>
          </div>
          <div className="col sidebar-wrapper">
          <div>
            <AddUserOrder/>
          </div>
          <div>
            <DeleteUserOrder/>
          </div>
          </div>
      </div>
    )
  }
}