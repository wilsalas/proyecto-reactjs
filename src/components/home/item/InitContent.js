import React, { Component } from 'react';
import { 
  Container,
  Row,
  Col
  
 } from 'reactstrap';
 //import Slider from "react-slick";
 import LoadinG from '../../loading/LoadinG';

 import fire  from '../../config/fire';
 import CardService from './CardService';
 import ViewBusqueda from '../busqueda/ViewBusqueda';
 
 import './contenedor.css';
 import 'bootstrap/dist/css/bootstrap.css';

export default class InitContent extends Component {

  constructor(props) {
        super(props);
        this.state = {
          items: "",
          loading: true, 
          products: [
            //	{noteId: 1, noteContent: 'Note 1'},
            //	{noteId: 2, noteContent: 'Note 2'}
            ]
            
        }
    }

    componentDidMount() {
      const { products } = this.state;

		  fire.database().ref('registros/productos').on('child_added', snap => {
        products.push({
          productoId: snap.key,
          imageSrc: snap.val().imageSrc,
          nombreProducto: snap.val().nombreProducto,
          numberPrecio: snap.val().numberPrecio,
          numberItem: snap.val().numberItem,
          descriptionProduct: snap.val().descriptionProduct
        });

        this.setState({products});
        //console.log(this.state.products)
      });

      fire.database().ref('registros/productos').on('child_removed', snap => {
        for(let i = 0; i < products.length; i++) {
          if(products[i].productoId === snap.key) {
            products.splice(i , 1);
          }
        }
        //console.log(products);
        this.setState({products});
      });
    
    }

    onBusquedaItem(e) {

      let datos = [];
      //const { datos } = this.state;

		  fire.database().ref('registros/productos').orderByValue().on('value', data => {
        
        data.forEach(function (element) {
          //console.log(((element.val().nombreProducto.toLowerCase().indexOf(e.target.value.toLowerCase()))>-1));
          if((element.val().nombreProducto.toLowerCase().indexOf(e.target.value.toLowerCase()))>-1){
    
              datos.push ({
                productoId: element.key,
                imageSrc: element.val().imageSrc, 
                nombreProducto: element.val().nombreProducto, 
                numberItem: element.val().numberItem, 
                numberPrecio: element.val().numberPrecio 
              })
              //console.log(JSON.stringify(datos))
            } 
        });
        
      });
      //console.log(JSON.stringify(datos))
      this.setState({ products: datos} )
      //console.log({products: datos})
    
    }

  render() {
    
    return (
      <Container className="contentPrinc mt-10">
        <Row className="border-contenedor">
          <Col xs="6">
            <h2 className="top-title-search">Catálogo de productos</h2>
          </Col>
          <ViewBusqueda onBusquedaItem={this.onBusquedaItem.bind(this)}/>
          <hr className="divider"/>
          <Col md='12' xs="auto">
            <Row className="borderColumns">
              <LoadinG/>
                <span className="content-left-icon next-content">
                  <button className="button-left">
                    <i className="fas fa-chevron-left"></i>
                  </button>
                </span>
                  {
                    //this.state.products.length > 0 ? ( 
                      //console.log(this.state.products) ||
                    this.state.products.map((porducto, i) => {
                      return (
                        <CardService key={i}
                            //expandiendo producto
                            productosCart = { porducto }

                            imageSrc={porducto.imageSrc}
                            nombreProducto={porducto.nombreProducto}
                            numberItem={porducto.numberItem}
                            numberPrecio={porducto.numberPrecio}
                            descriptionProduct={porducto.descriptionProduct}
                        />)
                      })
                    //) : ( 
                      //console.log('producto no encontrado')
                    //)
                  }
                <span className="content-rigth-icon prev-content">
                  <button className="button-rigth">
                   <i className="fas fa-chevron-right"></i>
                  </button>
                </span>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }

}