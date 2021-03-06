import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom"


const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route {...rest} render={props => (
    <Layout>
      <Component {...props} />
    </Layout>
  )} />
)

const MainLayout = props => (
  <div>
    <h1>Main</h1>
    {props.children}
  </div>
)

const AltLayout = props => (
  <div>
    <h1>Alt</h1>
    {props.children}
  </div>
)

const Foo = () => (
  <p>Foo</p>
)

const Bar = () => (
  <p>Bar</p>
)
