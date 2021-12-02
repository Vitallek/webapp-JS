import React from 'react';
import axios from 'axios';

export default class EditUser extends React.Component {
  
  state = {
    id: '',
    FnameLname: '',
    email: '',
    role: '',
  }

  handleChangeId = event => {
    this.setState({ id: event.target.value });
  }
  handleChangeFnameLname = event => {
    this.setState({ FnameLname: event.target.value });
  }
  handleChangeEmail = event => {
    this.setState({ email: event.target.value });
  }
  handleChangeRole = event => {
    this.setState({ role: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const order = {
      id: this.state.id,
      FnameLname: this.state.FnameLname,
      email: this.state.email,
      role: this.state.role,
    };

    axios.put('http://localhost:5000/userrrs/update/'+this.state.id, order)
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
            User Id:
            <input onChange={this.handleChangeId} className="form-control" type="number" required name="id" placeholder="Enter id"/>
          </label>
          <label className="form-outline mb-4">
            User's FIO
            <input onChange={this.handleChangeFnameLname} className="form-control" type="text" maxLength="30" required name="fio" placeholder="Enter ФИО" />
          </label>
          <label className="form-outline mb-4">
            User's email
            <input onChange={this.handleChangeEmail} className="form-control" type="text" maxLength="50" required name="email" placeholder="Enter email" />
          </label>
          <label className="form-outline mb-4">
            user's role
          <select onChange={this.handleChangeRole} className="form-control" type="text" required name="role">
            <option value="user">Обычный</option>
            <option value="admin">Администратор</option>
          </select>
          </label>
          <button type="submit" className="btn btn-warning">Update</button>
        </form>
      </div>
    );
  }
}
