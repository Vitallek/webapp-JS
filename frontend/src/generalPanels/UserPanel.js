import React, { Component } from "react";
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import 'react-pro-sidebar/dist/css/styles.css';

class UserPanel extends React.Component {
  render(){
    return(
      <div>
         oh my hello there, user
      </div>
    )
  }
}
export default UserPanel;
