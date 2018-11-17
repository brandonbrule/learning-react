import React, { Component } from 'react';
import './App.css';

import AuthProvider from './contexts/AuthProvider.js';

import Form from './components/Form.js';
import DisplayUser from './components/DisplayUser.js';

class App extends Component {
  render() {
    return (
      <AuthProvider>
          <Form />
          <DisplayUser />
      </AuthProvider>
    );
  }
}

export default App;
