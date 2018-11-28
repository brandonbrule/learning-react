import React, { Component } from "react";

//import {DynamicComponent1} from '../components/DynamicComponent1.js';

class ComponentAdder extends Component {
  state = {
    options: [
      {
        name: "Select…",
        value: null
      },
      {
        name: "DynamicComponent1",
        value: "../components/DynamicComponent1.js"
      },
      {
        name: "DynamicComponent2",
        value:
          "https://codepen.io/brandonbrule/pen/5ff85ba63abe4498170ee78051a91954.html"
      },
      {
        name: "DynamicComponent3",
        value:
          "https://codepen.io/brandonbrule/pen/6f4458f213ab5dc842d4fc14b6457a87.js"
      }
    ],
    value: "?",
    component: null
  };

  async loadLazyComponent(name) {
    this.setState({ component: null });

    try {
      console.log(name);
      const LazyLoadedComponentModule = await import("../components/DynamicComponent1.js");
      //const LazyLoadedComponentModule = await import(name);
      this.setState({
        component: React.createElement(LazyLoadedComponentModule.default)
      });
    } catch (err) {
      this.setState({
        component: <div>{`Failed to load component: ${err}`}</div>
      });
    }
  }

  fetchHTMLComponent(value) {
    fetch(value)
      .then(response => response.text())
      .then(text => {
        console.log(text);
        this.setState({ component: text });
      });
  }

  handleChange = event => {
    this.fetchHTMLComponent(event.target.value);
    this.loadLazyComponent(event.target.value);
    this.setState({ value: event.target.value });
  };

  render() {
    const { options, value, component } = this.state;

    return (
      <React.Fragment>
        <select onChange={this.handleChange} value={value}>
          {options.map(item => (
            <option key={item.value} value={item.value}>
              {item.name}
            </option>
          ))}
        </select>
        <h1>{value}</h1>
        {component}
      </React.Fragment>
    );
  }
}

export default ComponentAdder;
