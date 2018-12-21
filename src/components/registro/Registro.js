import React, { Component } from 'react';

import fire from '../config/fire';
import ServiceRegister from './ServiceRegister';

import './css/registro.css';

const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)

const formValid = ({ formErros, ...rest }) => {
    let valid = true;

    Object.values(formErros).forEach(val => {
        val.length > 0 && (valid = false)
    });

    Object.values(rest).forEach(val => {
        val === null && (valid = false)
    })

    return valid;
};

class Registro extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: null, 
            email: null, 
            contrasena: null,
            contrasenadRepetd: null,
            formErros: {
                username: "",
                email: "",
                contrasena: "",
                contrasenadRepetd: ""
            }
        };
    
    }

    onHandleChangeInput = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErros = this.state.formErros;

        switch (name) {
            case 'username':
            formErros.username = value.length < 3  
            ? "Minimo 3 caracteres recomendados" 
            : "";
            break;
            case 'email':
            formErros.email = emailRegex.test(value)  
            ? '' 
            : "Email invalid";
            break;
            case 'contrasena':
            formErros.contrasena = value.length < 6
            ? "Minimo 6 caracteres recomendados" 
            : "";
            break;
            case 'contrasenadRepetd':
            formErros.contrasenadRepetd = value.length < 6 
            ? "Minimo 6 caracteres recomendados" 
            : "";
            break; 
            default:
            break;
        }

        this.setState({ formErros,[name]: value }, () => console.log(this.state))
    }

    submitResgister(e) {
        e.preventDefault();

        if(formValid(this.state)) {
            fire.database().ref('registros/user').push({
                username: this.state.username,
                email: this.state.email,
                contrasena: this.state.contrasena
            }).then(function () {
                document.querySelector('.alert').style.display = 'block';
                setTimeout(function() {
                    document.querySelector('.alert').style.display = 'none';
                }, 3000);
 
             }).catch(function (error) {
                 console.log('detectado un error:', error);
            });
        } else {
            document.querySelector('.alert-c-v').style.display = 'block';
            setTimeout(function() {
                document.querySelector('.alert-c-v').style.display = 'none';
            }, 3000);
        }
       
        /*if(this.state.username!=="" && this.state.email!=="" && this.state.contraseña!=="" && this.state.contrasenadRepetd!==""){ 

             Send the message to Firebase
            fire.database().ref('registros/user').push({
               username: this.state.username,
               email: this.state.email,
               contrasena: this.state.contrasena
            }).then(function () {
                document.querySelector('.alert').style.display = 'block';
                 setTimeout(function() {
                    document.querySelector('.alert').style.display = 'none';
                }, 3000);

                /*this.setState({
                    username: '',
                    email: '',
                    contrasena: '',
                    contrasenadRepetd: ''
                });
             
            })
            .catch(function (error) {
                console.log('detectado un error:', error);
            });
            
           
        } else {
           
        }*/
        
        //window.location.href = "http://localhost:3000/Login.js";
        
    }

    render(){
       const { formErros } = this.state;
            
        return (
            <ServiceRegister 
            formErros={formErros}
             onHandleChangeInput={this.onHandleChangeInput.bind(this)} 
             submitResgister={this.submitResgister.bind(this)}>

            </ServiceRegister>
        );
    }
}

export default Registro;