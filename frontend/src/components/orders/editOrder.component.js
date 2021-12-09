import React from 'react';
import axios from 'axios';

export default class EditOrder extends React.Component {
  
  state = {
    id: '',
    shop_name: 'Vitallek`s Shop',
    emp_id: '',
    vehicle_id: '',
    order_date: require('moment')().format('YYYY-MM-DD HH:mm:ss'),
    order_type: 1,
    payment_type: 1,
    customer_email: '',
    status: '',
    totalPrice: 0,
  }

  handleChangeId = event => {
    this.setState({ id: event.target.value });
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
  handleChangeStatus = event => {
    this.setState({ status: event.target.value });
  }
  handleChangePrice = event => {
    this.setState({ totalPrice: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const order = {
      id: this.state.id,
      shop_name: this.state.shop_name,
      emp_id: this.state.emp_id,
      vehicle_id: this.state.vehicle_id,
      order_date: this.state.order_date,
      order_type: this.state.order_type,
      payment_type: this.state.payment_type,
      customer_email: this.state.customer_email,
      status: this.state.status,
      totalPrice: this.state.totalPrice,
    };

    axios.put('http://localhost:5000/orders/update/'+this.state.id, order)
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
      <div className="float-right p-4 mb-4 text-light">
        <form onSubmit={this.handleSubmit} className="d-flex flex-column justify-content-center">
          <label className="form-outline mb-4">
            order Id:
            <input onChange={this.handleChangeId} className="form-control" type="number" required name="id" placeholder="Enter id"/>
          </label>
          <label className="form-outline mb-4">
            order's employee id:
            <input onChange={this.handleChangeEmpID} className="form-control" type="number" required name="shop_name" placeholder="Enter employee id" />
          </label>
          <label className="form-outline mb-4">
            order's vehicle id:
            <input onChange={this.handleChangeVehicleID} className="form-control" type="number" required name="ordervehicleid" placeholder="Enter vehicle id" />
          </label>
          <label className="form-outline mb-4">
            order's date:
            <input className="form-control" disabled name="orderdate" placeholder={this.state.order_date} />
          </label>
  
          <label className="form-outline mb-4">
            order's type:
          <select onChange={this.handleChangeOrderType} className="form-control" type="name" name="ordertype">
            <option value="1">Стандарт</option>
            <option value="2">Срочный</option>
            <option value="3">Очень срочный</option>
            <option value="4">Супер срочный</option>
            <option value="5">Супер пупер срочный</option>
          </select>
          </label>

          <label className="form-outline mb-4">
            order' payment type:
          <select onChange={this.handleChangePayment} className="form-control" type="name" name="orderpaymenttype">
            <option value="1">Наличный расчёт</option>
            <option value="2">Безналичный расчёт</option>
          </select>
          </label>

          <label className="form-outline mb-4">
            customer_email:
            <input onChange={this.handleChangeCustomerID} className="form-control" type="number" required name="ordercustomerid" placeholder="Enter employee id" />
          </label>

          <label className="form-outline mb-4">
            order status:
          <select onChange={this.handleChangeStatus} className="form-control" type="text" name="status">
            <option value="pending">В обработке</option>
            <option value="confirmed">Подтверждён</option>
          </select>
          </label>

          <label className="form-outline mb-4">
            total price:
            <input onChange={this.handleChangePrice} className="form-control" type="number" required name="ordercustomerid" placeholder="Enter price" />
          </label>
          <button type="submit" className="btn btn-warning">Update</button>
        </form>
      </div>
    );
  }
}
