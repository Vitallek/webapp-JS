import React from 'react';
import axios from 'axios';

export default class EditEmployee extends React.Component {
  
  state = {
    id: '',
    first_name: '',
    last_name: '',
    qualification_id: 1,
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
    this.setState({ qualification_id: parseInt(event.target.value, 10)});
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

      window.location.reload();
  }

  render() {
    return (
      <div className="float-right p-4 mb-4 text-light">
        <form onSubmit={this.handleSubmit} className="d-flex flex-column justify-content-center">
          <label className="form-outline mb-4">
            Employee Id:
            <input onChange={this.handleChangeId} className="form-control" type="number" name="id" required placeholder="Enter id"/>
          </label>
          <label className="form-outline mb-4">
            Employee's First Name:
            <input onChange={this.handleChangeFirstName} className="form-control" type="text" name="first_name" placeholder="Enter name" maxlength = "20" required />
          </label>
          <label className="form-outline mb-4">
            Employee's Last Name:
            <input onChange={this.handleChangeLastName} className="form-control" type="price" name="last_name" placeholder="Enter price" maxlength = "20" required />
          </label>

          <label for="qualifictation" className="form-outline mb-4">
            Employee's Qualification:
            <select onChange={this.handleChangeQualificationID} className="form-control" id="qualifictation" type="qualifictation" name="qualifictation">
            <option value="1">Junior</option>
            <option value="2">Middle</option>
            <option value="3">Senior</option>
          </select>
          </label>
          
          <button type="submit" className="btn btn-warning">Update</button>
        </form>
      </div>
    );
  }
}
