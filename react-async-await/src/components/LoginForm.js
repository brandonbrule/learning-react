import React, { Component } from 'react';


class LoginForm extends Component {

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
