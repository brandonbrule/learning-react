import React, { Component } from 'react';
import LS from '../utilities/LocalStorageManager.js';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.changePermission = this.changePermission.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    LS.set('MyForm', this.state.value);
    this.props.updateAppState('MyForm', this.state.value);
    event.preventDefault();
  }

  changePermission(event){
    this.props.updateAppState('permissions', event.target.value);
  }

  componentDidMount(){
    const obj = LS.get('MyForm');
    this.setState({value: obj});
    this.props.updateAppState('MyForm', obj);
    console.log(obj);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>

        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />

        <button onClick={this.changePermission} value="true">Enable Permissions</button>
        <button onClick={this.changePermission} value="false">Disable Permissions</button>
      </form>
    );
  }
}

export default Form;
