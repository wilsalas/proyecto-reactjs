import React, { Component } from 'react';
import { 
    Col,
    InputGroup,
    InputGroupAddon,
    Button,
    Input
    
   } from 'reactstrap';

import './inputBusqueda.css';

class ViewBusqueda extends Component {

  render() {
    
    return (
        <Col xs="6 auto">
            <div className="posicinamientoInput">
            <InputGroup>
                <Input type="search" name="items" className="inputColor" placeholder="Buscar productos" onChange={this.props.onBusquedaItem} />
                <InputGroupAddon addonType="append" className="input-append-butt">
                  <Button color="secondary"><i className="fas fa-search" ></i></Button>
                </InputGroupAddon>
            </InputGroup>
            </div>
        </Col>
      );
    }
};

export default ViewBusqueda;