import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppDragDropDemo from './AppDragDropDemo';

class App extends Component {
  render() {
    return (
      <div className="App">
      <header>Interface Control</header>
        <AppDragDropDemo />
      </div>
    );
  }
}

export default App;
