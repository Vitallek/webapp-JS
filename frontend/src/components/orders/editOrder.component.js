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
    order_type: 1,
    payment_type: 1,
    customer_id: '',
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
    this.setState({ order_type: parseInt(event.target.value, 10) });
  }
  handleChangeOrderPrice = event => {
    this.setState({ order_price: event.target.value });
  }
  handleChangePayment = event => {
    this.setState({ payment_type: parseInt(event.target.value, 10) });
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
            <input onChange={this.handleChangeOrderDate} className="form-control" type="date" required name="orderdate" placeholder="dd.mm.yyyy" />
          </label>
          <label className="form-outline mb-4">
            order's price:
            <input onChange={this.handleChangeOrderPrice} className="form-control" type="number" required maxLength="10" name="orderprice" placeholder="Enter price" />
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
            customer_id:
            <input onChange={this.handleChangeCustomerID} className="form-control" type="number" required name="ordercustomerid" placeholder="Enter employee id" />
          </label>
          <button type="submit" className="btn btn-warning">Update</button>
        </form>
      </div>
    );
  }
}
