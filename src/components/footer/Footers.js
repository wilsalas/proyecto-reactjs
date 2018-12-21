import React, { Component } from 'react';
import { 
    Row,
    Col
    
   } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css';

class Footers extends Component{
   
   
    render() {
        return (
            <footer className="page-footer font-small stylish-color-dark pt-4 footer-fondo footer">
               <Row className="row-footer container">
                 <Col>Contacto</Col>
                 <Col>Politica Privasidad</Col>
                 <Col>Servicios</Col>
               </Row>
               <Col>
               <hr></hr>
               <ul className="list-unstyled list-inline text-center">
                 <li className="list-inline-item">
                    <a className="btn-floating btn-fb mx-1" href="/">
                    <i className="fab fa-facebook-f"></i>
                    </a>
                 </li>
                 <li className="list-inline-item">
                    <a className="btn-floating btn-tw mx-1" href="/">
                    <i className="fab fa-twitter"></i>
                    </a>
                 </li>
                 <li className="list-inline-item">
                    <a className="btn-floating btn-gplus mx-1" href="/">
                    <i className="fab fa-google-plus-g"></i>
                    </a>
                 </li>
                 <li className="list-inline-item">
                    <a className="btn-floating btn-li mx-1" href="/">
                    <i className="fab fa-linkedin-in"></i>
                    </a>
                 </li>
                 <li className="list-inline-item">
                    <a className="btn-floating btn-dribbble mx-1" href="/">
                    <i className="fab fa-dribbble"> </i>
                    </a>
                 </li>
                </ul>
               </Col>
               <div className="footer-copyright text-center py-3 ">© 2018 Copyright:
                  <a href="https://mdbootstrap.com/education/bootstrap/"> MDBootstrap.com</a>
              </div>
            </footer>
        );
    }
}

export default Footers;