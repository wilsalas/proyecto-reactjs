import React, { Component } from 'react';

import NavbarRoute from './navbar/NavbarRoute';
import InitContent from './item/InitContent';
import Footers from '../footer/Footers';

import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';

class Home extends Component{
  
    render() {
        return (
            <div className="App app-content2">
               <div className="scroll-content">
                  <NavbarRoute/>
                <div className="col-12">
                  <InitContent/>
                </div>
                  <Footers/>
               </div>
            </div>
        );
    }
}

export default Home;