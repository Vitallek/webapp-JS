import React from 'react';
import axios from 'axios';

export default class EditOrder extends React.Component {
  
  state = {
    id: '',
    shop_name: 'Vitallek`s Shop',
    emp_id: '',
    vehicle_id: '',
    order_date: '',
    order_price: '',
    order_type: '',
    payment_type: '',
    customer_id: '',
  }
  
  hardRefresh(){
    window.location.reload();
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
  handleChangeOrderDate = event => {
    this.setState({ order_date: event.target.value });
  }
  handleChangeOrderType = event => {
    this.setState({ order_type: event.target.value });
  }
  handleChangeOrderPrice = event => {
    this.setState({ order_price: event.target.value });
  }
  handleChangePayment = event => {
    this.setState({ payment_type: event.target.value });
  }
  handleChangeCustomerID = event => {
    this.setState({ customer_id: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const order = {
      id: this.state.id,
      shop_name: this.state.shop_name,
      emp_id: this.state.emp_id,
      vehicle_id: this.state.vehicle_id,
      order_date: this.state.order_date,
      order_price: this.state.order_price,
      order_type: this.state.order_type,
      payment_type: this.state.payment_type,
      customer_id: this.state.customer_id,
    };

    axios.put('http://localhost:5000/orders/update/'+this.state.id, order)
      .then(res => {
        console.log(res);
        console.log(res.data);
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
            <input onChange={this.handleChangeId} className="form-control" type="id" name="id" placeholder="Enter id"/>
          </label>
          <label className="form-outline mb-4">
            order's employee id:
            <input onChange={this.handleChangeEmpID} className="form-control" type="name" name="shop_name" placeholder="Enter employee id" />
          </label>
          <label className="form-outline mb-4">
            order's vehicle id:
            <input onChange={this.handleChangeVehicleID} className="form-control" type="name" name="ordervehicleid" placeholder="Enter vehicle id" />
          </label>
          <label className="form-outline mb-4">
            order's date:
            <input onChange={this.handleChangeOrderDate} className="form-control" type="name" name="orderdate" placeholder="dd.mm.yyyy" />
          </label>
          <label className="form-outline mb-4">
            order's price:
            <input onChange={this.handleChangeOrderPrice} className="form-control" type="name" name="orderprice" placeholder="Enter price" />
          </label>

          <label className="form-outline mb-4">
            order's type:
          <select onChange={this.handleChangeOrderType} className="form-control" type="name" name="ordertype">
            <option>Стандарт</option>
            <option>Срочный</option>
            <option>Очень срочный</option>
            <option>Супер срочный</option>
            <option>Супер пупер срочный</option>
          </select>
          </label>

          <label className="form-outline mb-4">
            order' payment type:
          <select onChange={this.handleChangePayment} className="form-control" type="name" name="orderpaymenttype">
            <option>Наличный расчёт</option>
            <option>Безналичный расчёт</option>
          </select>
          </label>

          <label className="form-outline mb-4">
            customer_id:
            <input onChange={this.handleChangeCustomerID} className="form-control" type="name" name="ordercustomerid" placeholder="Enter employee id" />
          </label>
          <button type="submit" className="btn btn-warning" onClick={this.hardRefresh}>Update</button>
        </form>
      </div>
    );
  }
}
