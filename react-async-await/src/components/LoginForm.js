import React, { Component } from 'react';
import LS from '../utilities/LocalStorageManager.js';
import {AuthContext} from '../contexts/AuthProvider.js';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }


  render() {
    return (
      <React.Fragment>
      <h2>components/LoginForm.js (User Login)</h2>
      <button onClick={this.props.requestLogin}>Login</button>
      </React.Fragment>
    );
  }
}

export default LoginForm;
