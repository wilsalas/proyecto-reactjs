import React, { Component } from 'react';
import {
  Col,
  Row,
  Button,
  Input
} from 'reactstrap';
import ModalItem from './modal/ModalItem';

import './addItem.css';

class AddItem extends Component {

  render() {

    return (
      <Row className="inputNumber">
        <span className="alert-input">Seleccione la cantidad de producto</span>
        <Col xs="3" className="masNumber">
          <ModalItem></ModalItem>
        </Col>
        <Col xs="3" className="masNumber">
          <Button title="Añadir al carrito"
            onClick={this.props.addItemCart}>
            <i className="fas fa-cart-plus" ></i>
          </Button>
        </Col>
        <Col xs="5" className="masNumber">

          <Input type="number" name="item" min={1} max={100}
            className="input-number"
            onChange={this.props.addSchowCart} />
        </Col>
      </Row>
    );
  }
}

export default AddItem;