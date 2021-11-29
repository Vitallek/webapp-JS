import React from 'react';
import axios from 'axios';

export default class EditOrderType extends React.Component {
  
  state = {
    id: '',
    type_name: '',
    koef: '',
  }
  
  handleChangeId = event => {
    this.setState({ id: event.target.value });
  }
  handleChangeTypeName = event => {
    this.setState({ type_name: event.target.value });
  }
  handleChangeKoef = event => {
    this.setState({ koef: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const order_type = {
      type_name: this.state.type_name,
      koef: this.state.koef,
    };

    axios.put('http://localhost:5000/order_types/update/'+this.state.id, order_type)
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
            Order_type Id:
            <input onChange={this.handleChangeId} className="form-control" type="number" required name="id" placeholder="Enter id"/>
          </label>
          <label className="form-outline mb-4">
            Order_type's Name:
            <input onChange={this.handleChangeTypeName} className="form-control" type="text" required maxLength="30" name="type_name" placeholder="Enter name" />
          </label>
          <label className="form-outline mb-4">
            Order_type's Price multiplier:
            <input onChange={this.handleChangeKoef} className="form-control" type="number" required  name="koef" placeholder="Enter price" />
          </label>
          <button type="submit" className="btn btn-warning">Update</button>
        </form>
      </div>
    );
  }
}
