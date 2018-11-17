import React, { Component } from 'react';
import LS from '../utilities/LocalStorageManager.js';
import {AuthContext} from '../contexts/AuthProvider.js';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    const obj = LS.get('MyForm');
    this.setState({value: obj});
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    LS.set('MyForm', this.state.value);
    event.preventDefault();
  }

  handleDynamicChange = (value, context) => e => {
    LS.set('MyForm', this.state.value);
    context.updatedynamicvalue(value);
    e.preventDefault();
  };

  render() {
    return (
      <AuthContext.Consumer>
        {(context) => (
          <React.Fragment>
            <button onClick={context.logout}>Logout</button>
            <button onClick={context.login}>Login</button>
            <form onSubmit={ this.handleDynamicChange(this.state.value, context)}>
                Name: <input type="text" value={this.state.value} onChange={this.handleChange} />
              <input type="submit" value="Submit" />
            </form>
          </React.Fragment>
        )}
      </AuthContext.Consumer>

    );
  }
}

export default Form;
