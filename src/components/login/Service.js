import React from 'react';
import { Link } from 'react-router-dom';
import './Login';

import 'bootstrap/dist/css/bootstrap.css';

export default class Service extends React.Component {
  render() {
    return (
      <div className="App loginContainer">

        <div className="panel panel-default">
        </div>

        <div className="inicioSesion fondo fond-backg-im">
        </div>
        <div className="fields-Container">
         <div className="row">
           <input className="emailUnico" type="email" name="email" id="email" placeholder="Email"  onChange={this.props.onEmailChange}/>
         </div>
         <div className="row">
           <input type="password" name="password" id="password" placeholder="contraseña" onChange={this.props.onPassWordChange}/>
         </div>
         <div className="row">
          <button id="login" className="loginButton" onClick={this.props.submitLogin}>INGRESAR</button>
         </div>
        </div>
        <div className="loginEnlace row">
           <ul><li className="colorTitle">Registrate_<Link to="/registro" className="textAqui">Tu_Cuenta_Aqui?</Link></li></ul>
           <div>{this.props.children}</div>
        </div>
      </div>
    );
  }
}