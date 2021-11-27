import React from 'react';
import axios from 'axios';

export default class EditEmployee extends React.Component {
  
  state = {
    id: '',
    first_name: '',
    last_name: '',
    qualification_id: '',
  }
  
  hardRefresh(){
    window.location.reload();
  }

  handleChangeId = event => {
    this.setState({ id: event.target.value });
  }
  handleChangeFirstName = event => {
    this.setState({ first_name: event.target.value });
  }
  handleChangeLastName = event => {
    this.setState({ last_name: event.target.value });
  }
  handleChangeQualificationID = event => {
    this.setState({ qualification_id: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const employee = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      qualification_id: this.state.qualification_id,
    };

    axios.put('http://localhost:5000/employees/update/'+this.state.id, employee)
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
            Employee Id:
            <input onChange={this.handleChangeId} className="form-control" type="id" name="id" placeholder="Enter id"/>
          </label>
          <label className="form-outline mb-4">
            Employee's First Name:
            <input onChange={this.handleChangeFirstName} className="form-control" type="name" name="first_name" placeholder="Enter name" />
          </label>
          <label className="form-outline mb-4">
            Employee's Last Name:
            <input onChange={this.handleChangeLastName} className="form-control" type="price" name="last_name" placeholder="Enter price" />
          </label>
          <label className="form-outline mb-4">
            Employee's Qualification (1 - junior, 2 - middle, 3 - senior):
            <input onChange={this.handleChangeQualificationID} className="form-control" type="name" name="first_name" placeholder="Enter qualification" />
          </label>
          <button type="submit" className="btn btn-warning" onClick={this.hardRefresh}>Update</button>
        </form>
      </div>
    );
  }
}
