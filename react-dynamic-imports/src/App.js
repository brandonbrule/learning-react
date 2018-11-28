import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import ComponentAdder from "./controller/ComponentAdder.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { lazyLoadedComponent: null };
  }

  async loadLazyComponent() {
    if (this.state.lazyLoadedComponent === null) {
      try {
        const LazyLoadedComponentModule = await import("./MyComponent.js");
        this.setState({
          lazyLoadedComponent: React.createElement(
            LazyLoadedComponentModule.default
          )
        });
      } catch (err) {
        this.setState({
          lazyLoadedComponent: <div>{`Failed to load component: ${err}`}</div>
        });
      }
    }
  }

  render() {
    return (
      <div className="App">
        <ComponentAdder />
        <button onClick={() => this.loadLazyComponent()}>Click to Load</button>
        {this.state.lazyLoadedComponent || <div>Not Loaded</div>}
      </div>
    );
  }
}

export default App;
