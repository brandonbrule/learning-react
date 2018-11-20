import React, { Component } from 'react';
import LS from '../utilities/LocalStorageManager.js';
import LoginForm from '../components/LoginForm.js';

export const AuthContext = React.createContext();
export default class AuthProvider extends Component {
  constructor(props) {
    super(props)
    this.requestUser = this.requestUser.bind(this)
  };

  state = {
    loggedin: true,
    user: null
  };

  componentDidMount(){
    if(LS.exists('user')){
      this.setState({user: LS.get('user').user});
    }
  };

  // Request User Data Info from jsonplaceholder (This will be login request)
  requestUser(){
    let rand = Math.floor(Math.random() * 10) + 1;
    fetch('https://jsonplaceholder.typicode.com/users/' + rand)
    .then(response => response.json())
    .then(
      json => {
        this.setState({user: json, loggedin: true});
        LS.set('user', {user: json});
      }
    )
  };

  // All AuthContext Comsumers have access to AuthContext state and a function that updates the state with logout.
  authProvider(){
      return(
        <AuthContext.Provider value={{
          state: this.state,
          logout: () => {
            this.setState({
              loggedin: false,
              user: null
            });
            LS.remove('user');
          }
        }}>
          {this.props.children}
        </AuthContext.Provider>
      )
  };


  // Login Form that passes requestUser to a button that calls this Auth Providers requestUser Function
  loginForm(){
      return(
        <LoginForm requestLogin={this.requestUser} />
      )
  };

  render() {
    let appstart;
    if(this.state.user){
      appstart = this.authProvider();
    }else{
      appstart = this.loginForm();
    }
    return (
      appstart
    );
  };
};
