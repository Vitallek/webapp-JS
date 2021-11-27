import React from 'react';
import axios from 'axios';

export default class DeleteEmployee extends React.Component {
  state = {
    id: '',
  }

  handleChange = event => {
    this.setState({ id: event.target.value });
  }

  hardRefresh(){
    window.location.reload();
  }

  handleSubmit = event => {
    event.preventDefault();

    axios.delete(`http://localhost:5000/employees/delete/${this.state.id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div className="float-right p-4 mb-4 bg-dark text-light">
        <form onSubmit={this.handleSubmit} className="d-flex flex-column justify-content-center">
          <label className="form-outline mb-4">
            Employee ID:
            <input onChange={this.handleChange} className="form-control" type="id" name="id" placeholder="Enter id" />
          </label>
          <button type="submit" onClick={this.hardRefresh} className="btn btn-danger">Delete</button>
        </form>
      </div>
    )
  }
}