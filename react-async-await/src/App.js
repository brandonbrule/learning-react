import React, { Component, lazy, Suspense } from "react";
import "./App.css";

import AuthProvider from "./contexts/AuthProvider.js";

import Logout from "./components/Logout.js";
import AppRouter from "./routes/AppRouter.js";
//import DisplayUser from './components/DisplayUser.js';

//import MyComp from './components/MyComp.js';

const DisplayUser = lazy(() => import("./components/DisplayUser.js"));





class App extends Component {
  render() {
    return (
      <AuthProvider>
        <Suspense fallback={<div>Loading</div>}>
          <AppRouter />
          <DisplayUser />
        </Suspense>
        <Logout />
      </AuthProvider>
    );
  }
}

export default App;
