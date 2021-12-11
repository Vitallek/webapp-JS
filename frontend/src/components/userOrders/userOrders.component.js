import React from 'react';
import axios from 'axios';

export default class UserOrders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  
      orders: [],
      toggleCarsList: 'userVehicleContainer',
      customer_email: '',
    }
  }

  componentDidMount() {

    axios.get("http://localhost:5000/login").then((response) => {
      this.setState({ customer_email: response.data.user[0].email });
      axios.get(`http://localhost:5000/orders/get/${this.state.customer_email}`)
      .then(res => {
        console.log(this.state.customer_email)
        const orders = res.data;
        this.setState({ orders });

      }).catch(err => {
        console.log(err);
      })
    });   
  }

  render() {
    return (
      <div>
        <div className="">
          {/* order list */}
          <div className={`${this.state.toggleCarsList}`}>
            { this.state.orders.map(Orders => 
                <div className='ordersBlockWrapper m-5' key={Orders.order_id}>
                  <div className="row mt-1">
                    <div className="col" >Status: <br/>{Orders.order_status}</div> 
                    <div className="col" >ID:<br/>{Orders.order_id}</div> 
                    <div className="col" >Total price:<br/>{Orders.price} $</div>  
                    <div className="col" >Order date:<br/>{Orders.order_date}</div> 
                    <div className="col" >Order type:<br/>{Orders.order_type}</div> 
                    <div className="col" >payment type:<br/>{Orders.payment_type}</div>  
                  </div>       
                  <hr/> 
                  <div className="row mt-1 mb-2">
                    <div className="col" >Car:<br/>{Orders.model_name}</div> 
                    <div className="col" >Engine:<br/>{Orders.engine_name}</div> 
                    <div className="col" >Wheels:<br/>{Orders.wheels_name}</div> 
                    <div className="col" >Turbo:<br/>{Orders.turbo_name}</div> 
                    <div className="col" >Transmission:<br/>{Orders.transmission_name}</div>
                  </div>
                  <div className="row mt-1 mb-2">
                    <img className='col img-fluid z-depth-1' src={process.env.PUBLIC_URL + `/carphoto/${Orders.vehicle_id}.jpg`} alt={Orders.model_name}/>
                  </div>
                  <div className="row mt-1 mb-2">
                    <div className="btn btn-danger" onClick={() => 
                      { if (window.confirm('Are you sure you wish to delete this order?')){
                        axios.delete(`http://localhost:5000/orders/delete/${Orders.order_id}`)
                          .then(res => {
                            console.log(res);
                            console.log(res.data);
                            window.location.reload();
                          })
                      } } } >Delete order</div>
                  </div>
                </div>
              )}
            </div>
        </div>
      </div>
    )
  }
}