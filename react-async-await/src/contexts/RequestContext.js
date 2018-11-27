import React, { Component } from 'react';

export const RequestContext = React.createContext();
export default class RequestProvider extends Component {
  constructor(props) {
    super(props)
    this.request = this.request.bind(this)
  };

  state = {
  };

  componentDidMount(){

  };

  // Request User Data Info from jsonplaceholder (This will be login request)
  request(url){
    alert("test");
  };


  render() {
    <RequestContext.Provider value={{
      state: this.state,
      request: (url) => {
        this.request(url)
      }
    }}>
      {this.props.children}
    </RequestContext.Provider>
  };
};
