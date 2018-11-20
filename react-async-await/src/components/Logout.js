import React, { Component } from 'react';
import LS from '../utilities/LocalStorageManager.js';
import {AuthContext} from '../contexts/AuthProvider.js';

class Logout extends Component {
  componentDidMount(){
    const obj = LS.get('MyForm');
    this.setState({value: obj});
  }

  render() {
    return (
      <AuthContext.Consumer>
        {(context) => (
          <React.Fragment>
            <button onClick={context.logout}>Logout</button>
          </React.Fragment>
        )}
      </AuthContext.Consumer>

    );
  }
}

export default Logout;
