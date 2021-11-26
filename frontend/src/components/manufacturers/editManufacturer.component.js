import React from 'react';
import axios from 'axios';

export default class EditManufacturer extends React.Component {
  
  state = {
    id: '',
    companyName: '',
  }
  
  hardRefresh(){
    window.location.reload();
  }

  handleChangeId = event => {
    this.setState({ id: event.target.value });
  }
  handleChangeName = event => {
    this.setState({ companyName: event.target.value });
  }


  handleSubmit = event => {
    event.preventDefault();

    const manufacturer = {
      id: this.state.id,
      companyName: this.state.companyName,
    };

    axios.put('http://localhost:5000/manufacturers/update/'+this.state.id, manufacturer)
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
            manufacturer id:
            <input onChange={this.handleChangeId} className="form-control" type="id" name="id" placeholder="Enter id"/>
          </label>
          <label className="form-outline mb-4">
            manufacturer name:
            <input onChange={this.handleChangeName} className="form-control" type="name" name="manufacturer_name" placeholder="Enter name" />
          </label>
          <button type="submit" className="btn btn-warning" onClick={this.hardRefresh}>Update</button>
        </form>
      </div>
    );
  }
}
