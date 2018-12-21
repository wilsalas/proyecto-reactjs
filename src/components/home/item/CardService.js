import React, { Component } from 'react';
import {
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardFooter

} from 'reactstrap';
import AddItem from './AddItem';

import Store from '../../store/Store';

import './card_tem.css';

class CardService extends Component {

  constructor(props) {
    super(props);
    this.state = {
      item: 1,
      itemCart: []
    };

  }


  addSchowCart(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({ [name]: value })
  }

  addItemCart() {
    if (this.state.item !== "") {
      Store.dispatch({
        type: "ADD_TO_CART",
        item: this.state.item,
        itemCart: [{
          productoId: this.props.productosCart.productoId,
          imageSrc: this.props.productosCart.imageSrc,
          numberItem: this.state.item,
          nombreProducto: this.props.productosCart.nombreProducto,
          descriptionProduct: this.props.productosCart.descriptionProduct,
          numberPrecio: this.props.productosCart.numberPrecio * this.state.item
        }]
      })
    } else {
      document.querySelector('.alert-input').style.display = 'block';
      setTimeout(function () {
        document.querySelector('.alert-input').style.display = 'none';
      }, 3000);
    }
  }

  render() {

    return (
      <Col xs="" className="borderRadius">
        <Card>
          <CardImg className="imgContent" src={this.props.imageSrc} alt="Card image cap" />
          <CardBody>
            <CardTitle>{this.props.nombreProducto}</CardTitle>
            <CardSubtitle className="subtitlePadre"><span className="subtitle">Precio:</span>{this.props.numberPrecio * this.state.item}</CardSubtitle>
            <CardSubtitle className="subtitlePadre"><span className="subtitle">Cantidad:</span>{this.state.item}</CardSubtitle>
            <CardText>{this.props.descriptionProduct}</CardText>
          </CardBody>
          <CardFooter>
            <AddItem
              addSchowCart={this.addSchowCart.bind(this)}
              addItemCart={this.addItemCart.bind(this)} />
          </CardFooter>
        </Card>
      </Col>
    );
  }
}

export default CardService;