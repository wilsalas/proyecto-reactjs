import React from 'react';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';

export default class Service extends React.Component {
  render() {

    return (
        <div className="contenedor">
        <li><Link to="/login"><i className="far fa-times-circle fa-3x iconsModify"></i></Link></li>
        <div>{this.props.children}</div>
        <div className="well">
            <div className="alert">Registrado correctamente</div>
            <div className="alert-c-v">Complete los campos por favor</div>
            <div className="contentTitle">
                Registro
            </div>
            <div className="form-group">
                <input type="text" name="username" 
                className={`form-control ${this.props.formErros.username.length > 0 ? "error": null}`} placeholder="Nombre usuario"  
                onChange={this.props.onHandleChangeInput} />
                {this.props.formErros.username.length > 0 && (
                    <span className="errorMessage">{this.props.formErros.username}</span>
                )}
            </div>
            <div className="form-group">
                <input type="email" name="email"  
                className={`form-control ${this.props.formErros.email.length > 0 ? "error": null}`} placeholder="email" 
                onChange={this.props.onHandleChangeInput} />
                {this.props.formErros.email.length > 0 && (
                    <span className="errorMessage">{this.props.formErros.email}</span>
                )}
            </div>
            <div className="form-group">
                <input type="password" name="contrasena" 
                className={`form-control ${this.props.formErros.contrasena.length > 0 ? "error": null}`} placeholder="Password" 
                onChange={this.props.onHandleChangeInput} />
                {this.props.formErros.contrasena.length > 0 && (
                    <span className="errorMessage">{this.props.formErros.contrasena}</span>
                )}
            </div>
            <div className="form-group">
                <input type="password" name="contrasenadRepetd" 
                className={`form-control ${this.props.formErros.contrasenadRepetd.length > 0 ? "error": null}`} placeholder="Repetir Contraseña" onChange={this.props.onHandleChangeInput}/>
                {this.props.formErros.contrasenadRepetd.length > 0 && (
                    <span className="errorMessage">{this.props.formErros.contrasenadRepetd}</span>
                )}
            </div>
            <div className="buttonValidando">
               <button type="button" className="btnNone" onClick={this.props.submitResgister}>
                REGISTRAR</button>
            </div>
        </div>
        </div>
    );
  }
}