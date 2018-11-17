import React, { Component } from 'react';
import LS from '../utilities/LocalStorageManager.js';

export const AuthContext = React.createContext();
export default class AuthProvider extends Component {
  state = {
    age: 100,
    dynamicvalue: null,
    loggedin: true
  };

  componentDidMount(){
    if(!LS.exists('user')){
      this.requestUser();
    } else {
      this.setState({user: LS.get('user').user});
    }
  };

  requestUser(){
    let rand = Math.floor(Math.random() * 10) + 1;
    fetch('https://jsonplaceholder.typicode.com/users/' + rand)
    .then(response => response.json())
    .then(
      json => {
        this.setState({user: json});
        LS.set('user', {user: json});
      }
    )
  };

  render() {
    return (
      <AuthContext.Provider value={{
        state: this.state,
        growAYearOlder: () => this.setState({
          age: this.state.age + 1
        }),
        updatedynamicvalue: (val) => {
          this.setState({
            dynamicvalue: val
          });
        },
        logout: () => {
          this.setState({
            loggedin: false,
            user: null
          });
          LS.remove('user');
        },
        login: () => {
          this.setState({
            loggedin: true
          });
          this.requestUser();
        }
      }}>
        {this.props.children}
      </AuthContext.Provider>
    );
  };
};
