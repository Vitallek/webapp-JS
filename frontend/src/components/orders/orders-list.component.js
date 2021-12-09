import React from 'react';
import axios from 'axios';
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
                  <div className="ordercol border tableHeader">order_type</div>      
                  <div className="ordercol border tableHeader">payment_type</div>      
                  <div className="ordercol border tableHeader">customer_id</div> 
                  <div className="ordercol border tableHeader">status</div>   
                  <div className="ordercol border tableHeader">price</div>                         
                      
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
                    <div className="ordercol border">{Orders.order_type}</div>     
                    <div className="ordercol border">{Orders.payment_type}</div>         
                    <div className="ordercol border">{Orders.customer_id}</div>         
                    <div className="ordercol border">{Orders.status}</div>     
                    <div className="ordercol border">{Orders.price}</div>                                 
                  </div>
                </div>
                )}
          </div>
          </div>
          <div className="col sidebar-wrapper">
          <div>
            {/* <AddOrder/> */}
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