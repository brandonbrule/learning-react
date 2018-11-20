import React, { Component } from 'react';
import {AuthContext} from '../contexts/AuthProvider.js';



class DisplayUser extends Component {


  showDetails(context){
    if(context.state.loggedin && context.state.user){
      return(
        <React.Fragment>
          <h2>components/DisplayUser.JS</h2>
          <h3>{context.state.user.name} : {context.state.user.email}</h3>
        </React.Fragment>
      )
    }
  };

  render() {
    return (
      <AuthContext.Consumer>
        {(context) => (
          <React.Fragment>
            {this.showDetails(context)}
          </React.Fragment>
        )}
      </AuthContext.Consumer>
    );
  }
}

export default DisplayUser;
