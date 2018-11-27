import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';




class App extends Component {
  constructor(props){
    super(props);
    this.state = {lazyLoadedComponent:null};
  }

  async loadLazyComponent(){
    if(this.state.lazyLoadedComponent === null){
      try{
        const LazyLoadedComponentModule = await import('./MyComponent.js');
        this.setState({lazyLoadedComponent: React.createElement(LazyLoadedComponentModule.default)})
      } catch(err){
        this.setState({lazyLoadedComponent: <div>{`Failed to load component: ${err}`}</div>});
      }
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={()=>this.loadLazyComponent()}>Click to Load</button>
          {this.state.lazyLoadedComponent || <div>Not Loaded</div>}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
