import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Store from '../../store/Store';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';

import CloseInfoLogin from './CloseInfoLogin';

import './navar.css';

export default class NavbarRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      item: 0

    };
    this._isMounted = false;
    this.toggle = this.toggle.bind(this);

    let countItem = 0;
    Store.subscribe(() => {
      if (this._isMounted) {
        countItem = parseFloat(Store.getState().item)
        this.setState({
          item: countItem
        })
      }
    })

    Store.dispatch({
      type: "FILTER_TO_CART",
      itemCount: parseFloat(Store.getState().item),
      listCarts: Store.getState().cart
    })


  }



  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }


  componentDidMount() {
    this._isMounted = true;
  }
  componentWillUnmount() {
    this._isMounted = false;
  }



  render() {
    return (
      <div className="fixed">
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">LA BODEGA</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="product-u">
                <Link to="/ProductsUpload"><i className="fas fa-upload"></i></Link>
                <div>{this.props.children}</div>
              </NavItem>
              <NavItem className="product-c">
                <Link to="/Carrito" className="col">
                  <i className="fas fa-shopping-cart color-icons">
                    <div className="content-item">
                      <span className="product-item cart-fond">{this.state.item}</span>
                    </div>
                  </i>
                </Link>
                <div>{this.props.children}</div>
              </NavItem>
              <div className="login-close">
                <CloseInfoLogin closeLogin={this.closeLogin} />
              </div>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}