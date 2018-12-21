import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col } from 'reactstrap';
import './modal.css';

class ModalItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imformProduc: "",
      showModal: false,
      backdrop: true
    };

  }

  GetItemCart = productos => {
    const { imformProduc } = this.state;
    imformProduc.push({
      productos
    }) 
    console.log(productos)
    this.setState({ imformProduc: productos} )
    console.log(this.state.imformProduc[0].productos)
    //localStorage.setItem("items", JSON.stringify(productos))
    //localStorage.setItem("items", productos); 
  }
  

  handleOpenModal () {
    //let login = new CardService();
    //login.addItemCart();
    //navigate('Result', {imformProduc: this.props.productosCart})
    //console.log({imformProduc: this.props.productosCart})
      this.setState({ showModal: true });
   
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }

  changeBackdrop(e) {
    let value = e.target.value;
    if (value !== 'static') {
      value = JSON.parse(value);
    }
    this.setState({ backdrop: value });
  }

  

  render() {
    return (
      <div>
        <Button color="success" onClick={this.handleOpenModal.bind(this)}><i className="fas fa-plus"></i></Button>

        <Modal isOpen={this.state.showModal} backdrop={this.state.backdrop}>
          <Row>
            <Col>
              <span className="price-tag">{this.state.numberPrecio}</span>
            </Col>
            <Col>
              <ModalHeader>{this.state.nombreProducto}</ModalHeader>
              <ModalBody>
                {this.state.descriptionProduct}
              </ModalBody>
            </Col>
          </Row>
          <ModalFooter className="modal-right">
            <Button className="btn-color close" onClick={this.handleCloseModal.bind(this)}><i className="fas fa-times icon-butt"></i></Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalItem;