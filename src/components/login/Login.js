import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import './css/login.css';

import fire from '../config/fire';
import Service from './Service';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };

  }

  onEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  onPassWordChange(e) {
    this.setState({ password: e.target.value });
  }


  submitLogin(e) {
  
    const self = this;

    if(self.state.email !== "" && self.state.password !== "") {

      fire.database().ref("registros/user").orderByChild("email").equalTo(self.state.email).on("value", data => {
        var message = "";
        if (data.val() === null) {
          alert("El usuario no existe");
        } else {
          data.forEach(element => {
            if (element.val().contrasena === self.state.password) {
              message = "Concedido";
            } else {
              message = "El usuario o la contraseña incorrectos";
            }
          });
          if (message === "Concedido") {
            window.location.href = "http://localhost:3000/home";
          } else {
            alert(message)
          }
        }
      });
    } else {
      alert("Correo o contraseña vacia")
    }
    /*if(self.state.email!=="" && self.state.password!==""){
      //
      const result = fire.database().ref("registros/");
      //.limitToFirst(1)
      result.orderByChild("email").on("child_added", function (data) {

        console.log((data.val().contrasena + " ---- " +self.state.password))
            
        if ( data.val().email === self.state.email && data.val().contrasena === self.state.password ) {
         alert("Bienvenido")
        } else {
         alert("El usuario u la contraseña incorrecto")
        }
   
      });

      }else{
        alert("Correo o contraseña vacia");
      }*/
   
  }


  render() {

    return (
      <div className="fondo-content1">
       <Service 
         onEmailChange={this.onEmailChange.bind(this)} 
         onPassWordChange={this.onPassWordChange.bind(this)} 
         submitLogin={this.submitLogin.bind(this)}>
        </Service>
      </div>
    );
  }
}

export default Login;
