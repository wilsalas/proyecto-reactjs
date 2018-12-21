import React from 'react';
import { Router, Route, Redirect, Switch } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory';


import Login from '../login/Login';
import Registro from '../registro/Registro';
import Home from '../home/Home';
import ProductsUpload from '../home/products/ProductsUpload';
import Carrito from '../carrito/Carrito';

import './css/App.css';

const browserHistory = createBrowserHistory();

const App = () =>

  <Router history={browserHistory}>
    <Switch>
      <Route path='/login' exact component={Login} />
      <Route path='/registro' component={Registro} />
      <Route path='/home' component={Home} />
      <Route path='/ProductsUpload' component={ProductsUpload} />
      <Route path='/Carrito' component={Carrito} />
      <Redirect to='/login' />
    </Switch>
  </Router>

export default App;
