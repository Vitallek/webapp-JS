import React from 'react';
import axios from 'axios';
import AddOrderType from './add-order_type.component';
import EditOrderType from './editOrder_type.component';
import DeleteOrderType from './deleteOrder-type.component';


const apiUrl = "http://localhost:5000/order_types";

export default class OrderTypeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  
      order_types: [],
    }
  }
  


  componentDidMount() {
    axios.get(apiUrl)
      .then(res => {
        const order_types = res.data;
        this.setState({ order_types });
        
      }).catch(err => {
        console.log(err);
      })
  }
  
  render() {
    return (
      <div className="adminContainer">

        <div className="mt-3 tableContainer">
          
            <div className="ml-3">
              <div className="row" >  
                <div className="col-1 border tableHeader">Id</div>  
                <div className="col border tableHeader">Order_types's name</div>      
                <div className="col border tableHeader">Order_type's price multiplier</div> 
              </div>
            </div>

            { this.state.order_types.map(Order_types => 
              <div className="ml-3">
                <div className="row" >  
                  <div className="col-1 border" key={Order_types.id}>{Order_types.id}</div>  
                  <div className="col border">{Order_types.type_name}</div>      
                  <div className="col border">{Order_types.koef}</div>
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