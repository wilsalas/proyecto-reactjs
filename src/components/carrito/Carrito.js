import React, { Component } from 'react';
//import Store from '../store/Store';
//import { removeAddToCart } from '../store/actionCreators';
import {
  Table,
  Container
} from 'reactstrap';

import NavbarRoute from '../home/navbar/NavbarRoute';

import './carrito.css';
import Store from '../store/Store';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemCart: []
    }
    Store.subscribe(() => {
      this.setState({
        itemCart: Store.getState().listCarts
      })
    })
  }


  newStateFilter = () => {
    var flags = [], output = [], l = this.state.itemCart.length, i;
    for (i = 0; i < l; i++) {
      if (flags[this.state.itemCart[i].productoId]) continue;
      flags[this.state.itemCart[i].productoId] = true;
      output.push(this.state.itemCart[i]);
    }
    return output;
  }


  render() {
    console.log(this.newStateFilter());

    return (
      <div>
        <NavbarRoute />
        <Container header="Shopping Cart" className="content-cart-top">
          <div className="content-subtitle">
            <h4>Carrito de compras</h4>
          </div>
          <Table className="content-table-c">

            <tbody>
              {
                this.newStateFilter().map(product =>
                  <tr key={product.productoId}>
                    <td><img src={product.imageSrc} width={100} alt={product.imageSrc} /></td>
                    <td>{product.numberPrecio}</td>
                    <td>{product.numberItem}</td>
                    <td>{product.descriptionProduct}</td>
                  </tr>
                )}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="4">
                  Total: ${this.newStateFilter().reduce((sum, product) => sum + parseFloat(product.numberPrecio), 0)}
                </td>
              </tr>
            </tfoot>
          </Table>
        </Container>
      </div>
    );
  }

}

export default Home;