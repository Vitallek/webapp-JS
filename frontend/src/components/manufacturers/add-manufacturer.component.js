import React from 'react';
import axios from 'axios';

export default class AddManufacturer extends React.Component {
  state = {
    companyName: '',
  }

  hardRefresh(){
    window.location.reload();
  }

  handleChangeName = event => {
    this.setState({ companyName: event.target.value });
  }  

  handleSubmit = event => {
    event.preventDefault();

    const manufacturer = {
      companyName: this.state.companyName,
    };

    axios.post('http://localhost:5000/manufacturers/create', manufacturer)
      .then(res => {
        console.log(res);
        console.log(res.data);
      }).catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <div className="float-right p-4 mb-4 bg-dark text-light">
        <form onSubmit={this.handleSubmit} className="d-flex flex-column justify-content-center">
          <label className="form-outline mb-4">
            manufacturer name:
            <input onChange={this.handleChangeName} className="form-control" type="name" name="companyName" placeholder="Enter name" />
          </label>
          <button type="submit" onClick={this.hardRefresh} className="btn btn-success">Add</button>
        </form>
      </div>
    );
  }
}
