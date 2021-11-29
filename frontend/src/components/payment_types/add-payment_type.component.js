import React from 'react';
import axios from 'axios';

export default class AddPaymentType extends React.Component {
  state = {
    id: '',
    type_name: '',
  }

  handleChangeTypeName = event => {
    this.setState({ type_name: event.target.value });
  }


  handleSubmit = event => {
    event.preventDefault();

    const payment_type = {
      type_name: this.state.type_name,
    };

    axios.post('http://localhost:5000/payment_types/create', payment_type)
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
            Payment_type's Name:
            <input onChange={this.handleChangeTypeName} className="form-control" type="text" required maxLength="30" name="type_name" placeholder="Enter name" />
          </label>
          <button type="submit" className="btn btn-success">Add</button>
        </form>
      </div>
    );
  }
}
