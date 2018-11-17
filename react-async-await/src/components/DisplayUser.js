import React, { Component } from 'react';
import {AuthContext} from '../contexts/AuthProvider.js';



class DisplayUser extends Component {


  showDetails(context){
    if(context.state.loggedin && context.state.user){
      return(
        <React.Fragment>
          <p>{context.state.user.name} : {context.state.user.email}</p>

          <span>Age: {context.state.age}</span>
          <button onClick={context.growAYearOlder}>+1</button>
          <h3>Message: </h3>
          <div>{context.state.dynamicvalue}</div>
        </React.Fragment>
      )
    }
  };

  render() {
    return (
      <AuthContext.Consumer>
        {(context) => (
          <React.Fragment>
            <hr />
            {this.showDetails(context)}
          </React.Fragment>
        )}
      </AuthContext.Consumer>
    );
  }
}

export default DisplayUser;
