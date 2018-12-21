import React from 'react';
import { 
  Col, 
  Row, 
  Button, 
  Form, 
  FormGroup, 
  Label, 
  Input,
  Container,
  Progress
} from 'reactstrap';

import './products_upload.css';

export default class FormProducts extends React.Component {
  render() {
    
    return (
      <Form className="bord-cont-prod container" >
        <div className="alert">Exito en la inserción del producto</div>
        <div className="row f-content-imgB">
          <div className="img-content" >
            <div className={this.props.labelClass} >
              <img src={this.props.imageSrc} className={this.props.loaded ? 'loaded' : undefined} alt="Vista del imagen" />
            </div>
            <Container className="fond-progress-f">
              <Progress className={this.props.loadedProgress ? 'loadedProgress' : undefined} value={this.props.uploadValue}></Progress>
            </Container>
          </div>
          <Col sm={12}>
              <div className="btn file-button">
                <i className="fas fa-camera fa-3x iconsButton" style={{ color: this.props.iconColor }}></i>
                <Input type="file" accept="image/*" className="form-products btn_enviar" onChange={this.props.onFileChange} ref="input" />
              </div>
          </Col>
        </div>
        <Row form>
          <Col md={4}>
            <FormGroup>
              <Label>Email</Label>
              <Input type="email" name="email" className={`form-products ${this.props.emailErr ? "error": null}`} onChange={this.props.handleFormInput} placeholder="ejemplo@gmail.com" />
              <small className="danger-error">{ this.props.emailErr ? this.props.emailErr : "" }</small>
            </FormGroup>
          </Col>
          <Col md={5}>
            <FormGroup>
              <Label>Fecha</Label>
              <Input type="date" name="date" className={`form-products ${this.props.fechaErr ? "error": null}`} onChange={this.props.handleFormInput} placeholder="date placeholder" />
              <small className="danger-error">{ this.props.fechaErr ? this.props.fechaErr : "" }</small>
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={4}>
            <FormGroup>
              <Label>País</Label>
              <Input type="text" name="statePais" className={`form-products ${this.props.paisErr ? "error": null}`} onChange={this.props.handleFormInput} placeholder="Santa Cruz"/>
              <small className="danger-error">{ this.props.paisErr ? this.props.paisErr : "" }</small>
            </FormGroup>
          </Col>
          <Col md={5}>
            <FormGroup>
              <Label>Ciudad</Label>
              <Input type="text" name="city" className={`form-products ${this.props.ciudadErr ? "error": null}`} onChange={this.props.handleFormInput} placeholder="Ciudad"/>
              <small className="danger-error">{ this.props.ciudadErr ? this.props.ciudadErr : "" }</small>
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label>Codigo</Label>
              <Input type="text" name="codigoPostal" className={`form-products ${this.props.codigoPostalErr ? "error": null}`} onChange={this.props.handleFormInput} placeholder="Codigo postal"/>
              <small className="danger-error">{ this.props.codigoPostalErr ? this.props.codigoPostalErr : "" }</small>
            </FormGroup>  
          </Col>
        </Row>
        <FormGroup>
          <Label>Dirección</Label>
          <Input type="text" name="address" className={`form-products ${this.props.direccionErr ? "error": null}`} onChange={this.props.handleFormInput} placeholder="Villa 1ro de mayo"/>
          <small className="danger-error">{ this.props.direccionErr ? this.props.direccionErr : "" }</small>
        </FormGroup>
        <FormGroup>
            <Label>Producto</Label>
            <Input type="text" name="nombreProducto" className={`form-products ${this.props.nombreProductErr ? "error": null}`} onChange={this.props.handleFormInput} placeholder="Nombre del producto"/>
            <small className="danger-error">{ this.props.nombreProductErr ? this.props.nombreProductErr : "" }</small>
        </FormGroup>
        <Row form>
          <Col md={4}>
            <FormGroup>
              <Label>Precio</Label>
              <Input type="number" name="numberPrecio" className={`form-products ${this.props.precioErr ? "error": null}`} onChange={this.props.handleFormInput} placeholder="Precio del producto"/>
              <small className="danger-error">{ this.props.precioErr ? this.props.precioErr : "" }</small>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label>Item</Label>
              <Input type="number" name="numberItem" className={`form-products ${this.props.itemErr ? "error": null}`} onChange={this.props.handleFormInput} placeholder="Seleccinar item" />
              <small className="danger-error">{ this.props.itemErr ? this.props.itemErr : "" }</small>
            </FormGroup>
          </Col>
          <Col md={4}>
          <FormGroup>
            <Label>Categorias</Label>
            <Input type="select" name="selectCategory" className={`form-products ${this.props.categoryErr ? "error": null}`} onChange={this.props.handleFormInput} >
              <option></option>
              <option>Vestimenta</option>
              <option>Ropa deportivo</option>
              <option>Verduras</option>
              <option>Frutas</option>
              <option>Cosmeticos</option>
            </Input>
            <small className="danger-error">{ this.props.categoryErr ? this.props.categoryErr : "" }</small>
          </FormGroup>
         </Col>
        </Row>
        <FormGroup >
          <Label>Descripcion del producto</Label>
          <Input type="textarea" name="descriptionProduct" className={`form-products ${this.props.descriptionErr ? "error": null}`} onChange={this.props.handleFormInput} />
          <small className="danger-error">{ this.props.descriptionErr ? this.props.descriptionErr : "" }</small>
        </FormGroup>
        <FormGroup check>
         <Col>
            <Input type="checkbox" name="check" className={`form-products ${this.props.checkErr ? "error": null}`} checked={this.props.check} onChange={this.props.handleFormInput} />
            <small className="danger-error">{ this.props.checkErr ? this.props.checkErr : "" }</small>
            <Label check>Condiciones</Label>
          </Col>
        </FormGroup>
        <FormGroup>
          <Row>
            <Col ><br></br>
            <Button onClick={this.props.submitResgisterItem} outline color="warning" size="lg" block>REGISTRAR PRODUCTO</Button>
            </Col>
          </Row>
        </FormGroup>
      </Form>
    );
  }
}