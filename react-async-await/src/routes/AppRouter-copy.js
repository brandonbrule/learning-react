import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Index = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;

const routes = [
  {
    title: "Home",
    route: "/",
    loggedin: true,
    layout: Index
  },
  {
    title: "About",
    route: "/about/",
    loggedin: true,
    layout: About
  },
  {
    title: "Users",
    route: "/users/",
    loggedin: true,
    layout: Users
  }
];


const NavBuilder = ({routes}) => (
  <>
    {routes.map(route => (
      <Link to={route.route}><li className="station" key={route.title}>{route.title}</li></Link>
    ))}
  </>
);

const RouteBuilder = ({routes}) => (
  <>
    {routes.map(route => (
      <Route path={route.route} exact key={route.title} component={route.layout} />
    ))}
  </>
);

class AppRouter extends Component {
  state = {routes:null};
  componentDidMount(){
      this.setState({routes: routes});
  }

  render() {
    console.log(this.state);
    return (
      <Router>
        <React.Fragment>
          <NavBuilder routes={routes} />
          <RouteBuilder routes={routes} />
        </React.Fragment>
      </Router>
    );
  }
}

export default AppRouter;
