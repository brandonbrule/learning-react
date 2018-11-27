import React, { Component, lazy, Suspense } from 'react';
import './App.css';

import AuthProvider from './contexts/AuthProvider.js';

import Logout from './components/Logout.js';
import DisplayUser from './components/DisplayUser.js';

//import MyComp from './components/MyComp.js';

const MyComp = lazy( ()=>import('./components/MyComp.js') );

class App extends Component {
  render() {
    return (

        <AuthProvider>
            <Suspense fallback={<div>Loading</div>}>
              <MyComp />
            </Suspense>
            <Logout />
            <DisplayUser />
        </AuthProvider>

    );
  }
}

export default App;
