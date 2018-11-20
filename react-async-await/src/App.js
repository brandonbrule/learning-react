import React, { Component } from 'react';
import './App.css';

import AuthProvider from './contexts/AuthProvider.js';

import Logout from './components/Logout.js';
import DisplayUser from './components/DisplayUser.js';

class App extends Component {
  render() {
    return (
      <AuthProvider>
          <Logout />
          <DisplayUser />
      </AuthProvider>
    );
  }
}

export default App;
