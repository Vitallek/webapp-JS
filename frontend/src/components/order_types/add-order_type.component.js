import React from 'react';
import axios from 'axios';

export default class AddOrderType extends React.Component {
  state = {
    id: '',
    type_name: '',
    koef: '',
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

    axios.post('http://localhost:5000/order_types/create', order_type)
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
            Order_type's Name:
            <input onChange={this.handleChangeTypeName} className="form-control" type="text" required maxLength="30" name="type_name" placeholder="Enter name" />
          </label>
          <label className="form-outline mb-4">
            Order_type's price multiplier:
          <input onChange={this.handleChangeKoef} className="form-control" type="number" required name="koef" placeholder="Enter price" />
          </label>
          <button type="submit" className="btn btn-success">Add</button>
        </form>
      </div>
    );
  }
}
