import React, { Component } from 'react';
import LS from '../utilities/LocalStorageManager.js';

class DisplayForm extends React.Component {
  constructor(props) {
    super(props);

  }

  showName(){
    if(this.props.AppState.loggedin === "true"){
      return <h1>{this.props.AppState.MyForm}</h1>
    }
  };

  render() {
    console.log(this.props);
    return (
      <React.Fragment>
      {this.showName()}
      <h1>{this.props.AppState.MyForm}</h1>
      </React.Fragment>
    );
  }
}

export default DisplayForm;
