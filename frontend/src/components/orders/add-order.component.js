import React from 'react';
import axios from 'axios';

export default class AddOrder extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    shop_name: 'Vitallek`s Shop',
    emp_id: 0,
    vehicle_id: 0,
    order_date: require('moment')().format('YYYY-MM-DD HH:mm:ss'),
    order_type: 1,
    payment_type: 1,
    customer_email: 0,
    status: 'pending',
    totalPrice: 0,
  }
}

  handleChangeEmpID = event => {
    this.setState({ emp_id: event.target.value });
  }
  handleChangeVehicleID = event => {
    this.setState({ vehicle_id: event.target.value });
  }
  // handleChangeOrderDate = event => {
  //   this.setState({ order_date: event.target.value });
  // }
  handleChangeOrderType = event => {
    this.setState({ order_type: parseInt(event.target.value, 10) });
  }
  handleChangePayment = event => {
    this.setState({ payment_type: parseInt(event.target.value, 10) });
  }
  handleChangeCustomerID = event => {
    this.setState({ customer_email: event.target.value });
  }
  handleChangePrice = event => {
    this.setState({ totalPrice: event.target.value });
  }


  handleSubmit = event => {
    event.preventDefault();

    const order = {
      shop_name: this.state.shop_name,
      emp_id: this.state.emp_id,
      vehicle_id: this.state.vehicle_id,
      order_date: this.state.order_date,
      order_type: this.state.order_type,
      payment_type: this.state.payment_type,
      customer_email: this.state.customer_email,
      totalPrice: this.state.totalPrice,
    };

    axios.post('http://localhost:5000/orders/create', order)
      .then(res => {
        console.log(res);
        console.log(res.data);
        window.location.reload();
      }).catch(err => {
        console.log(err);
      })
      
  }

  render() {
    return (
      <div className="float-right p-4 mb-4 bg-dark text-light">
        <form onSubmit={this.handleSubmit} className="d-flex flex-column justify-content-center">
          <label className="form-outline mb-4">
            order's employee id:
            <input onChange={this.handleChangeEmpID} className="form-control" required type="number" name="shop_name" placeholder="Enter employee id" />
          </label>
          <label className="form-outline mb-4">
            order's vehicle id:
            <input onChange={this.handleChangeVehicleID} className="form-control" required type="number" name="ordervehicleid" placeholder="Enter vehicle id" />
          </label>
          <label className="form-outline mb-4">
            order's date:
            <input className="form-control" disabled name="orderdate" placeholder={this.state.order_date} />
          </label>

          <label className="form-outline mb-4" for="ordertype">
            order's type:
          </label>
          <select onChange={this.handleChangeOrderType} className="form-control" maxLength="1" type="number" id="ordertype" name="ordertype">
            <option value="1">Стандарт</option>
            <option value="2">Срочный</option>
            <option value="3">Очень срочный</option>
            <option value="4">Супер срочный</option>
            <option value="5">Супер пурпер срочный</option>
          </select>

          <label className="form-outline mb-4" for="orderpaymenttype">
            order' payment type (1-наличные, 2 - карта):
          </label>
          <select onChange={this.handleChangePayment} className="form-control" maxLength="1"type="number" id="orderpaymenttype" name="orderpaymenttype">
          <option value="1">Наличные</option>
          <option value="2">Карта</option>
         </select>

          <label className="form-outline mb-4">
            customer_email:
            <input onChange={this.handleChangeCustomerID} className="form-control" type="number" required name="ordercustomerid" placeholder="Enter employee id" />
          </label>

          <label className="form-outline mb-4">
            total price:
            <input onChange={this.handleChangePrice} className="form-control" type="number" required name="ordercustomerid" placeholder="Enter price" />
          </label>
          <button type="submit" className="btn btn-success">Add</button>
        </form>
      </div>
    );
  }
}
