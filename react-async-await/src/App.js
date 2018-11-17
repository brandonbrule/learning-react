import React, { Component } from 'react';
import './App.css';
import LS from './utilities/LocalStorageManager.js';
import Form from './components/Form.js';
import DisplayForm from './components/DisplayForm.js';

class App extends Component {
  state = {
    stateAtStartTest: "Hi From App State"
  };

  updateAppState = (key, value) => {
    var obj = {};
    obj[key] = value;
    this.setState(obj);
  };

  render() {
    //LS.set('stringtest', "string test");
    //LS.set('objtest', {testing: "test"});
    //console.log( LS.get('stringtest') );
    //console.log( LS.get('objtest') );
    //console.log(localStorage);

    //LS.remove('objtest');
    //console.log(localStorage);

    return (
      <div className="App">
        <Form
          updateAppState={this.updateAppState}
         />
         <DisplayForm AppState={this.state} />
      </div>
    );
  }
}

export default App;
