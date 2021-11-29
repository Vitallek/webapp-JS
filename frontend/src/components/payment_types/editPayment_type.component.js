import React from 'react';
import axios from 'axios';

export default class EditPaymentType extends React.Component {
  
  state = {
    id: '',
    type_name: '',
  }
  
  handleChangeId = event => {
    this.setState({ id: event.target.value });
  }
  handleChangeTypeName = event => {
    this.setState({ type_name: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const payment_type = {
      type_name: this.state.type_name,
    };

    axios.put('http://localhost:5000/payment_types/update/'+this.state.id, payment_type)
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
            payment_type Id:
            <input onChange={this.handleChangeId} className="form-control" type="number" required name="id" placeholder="Enter id"/>
          </label>
          <label className="form-outline mb-4">
            payment_type's Name:
            <input onChange={this.handleChangeTypeName} className="form-control" type="text" required maxLength="30" name="type_name" placeholder="Enter name" />
          </label>
          <button type="submit" className="btn btn-warning">Update</button>
        </form>
      </div>
    );
  }
}
