import React, { Component } from 'react';

import fire from '../../config/fire';
import NavbarRoute from '../navbar/NavbarRoute';
import FormProducts from './FormProducts';
import './products_upload.css';

class ProductsUpload extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            uploadValue: 0,
            active: false,
            imageSrc: '',
            loaded: false,
            email: "",
            date: "",
            statePais: "",
            city: "",
            codigoPostal: "",
            address: "",
            nombreProducto: "",
            numberPrecio: "",
            numberItem: "",
            selectCategory: "",
            descriptionProduct: "",
            check: "",
            errors: [] 
        };

      this.onDrop       = this.onDrop.bind(this);
    
    }

    showValidationErr(elm, msg) {
        this.setState((prevState) => ({ errors: [...prevState.errors, {elm, msg}] }));
    }

    clearValidationErr(elm) {
        this.setState((prevState) => {
            let newArr = [];
            for( let err of prevState.errors ) {
                if( elm !== err.elm) {
                    newArr.push(err);
                }
            }
            return {errors: newArr};
        });
    }

    onDragOver(e) { 
        e.preventDefault(); 
    }
    
    onDrop(e) {
        e.preventDefault();
        this.setState({ active: false });
        this.onFileChange(e, e.dataTransfer.files[0]);
    }
    
    onFileChange(e, file) {
        var files = file || e.target.files[0],
        pattern = /image-*/,
        reader = new FileReader();

        /*reader.on('state_changed', snapshot => {
            let percentage = (snapshot.bytesTransferred / snapshot.totalBytes)* 100;
            this.setState({
                uploadValue: percentage
            })
        }, error => { 
            console.log(error.message)
        }, () => {
            this.setState({
                uploadValue: 100,
                imageSrc: reader.snapshot.downloadURL
            })
        })*/
            
        if (!files.type.match(pattern)) {
            alert('Formato inválido');
            return;
        }
        
        this.setState({ loaded: false });
        
        reader.onload = (e) => {
            this.setState({ 
                imageSrc: reader.result, 
                loaded: true 
            }); 
        }
        
        reader.readAsDataURL(files);
    }
    
    getFileObject() {
        return this.refs.input.files[0];
    }
    
    getFileString() {
        return this.state.imageSrc;
    }

    handleFormInput(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({ [name]: value });
        this.clearValidationErr(target.name);
    }

    submitResgisterItem(e) {
        e.preventDefault();
         
         console.log(this.state)  
        if( this.state.email!=="" && 
            this.state.date!=="" && 
            this.state.statePais!=="" && 
            this.state.city!=="" &&
            this.state.codigoPostal!=="" && 
            this.state.address!=="" && 
            this.state.nombreProducto!=="" && 
            this.state.numberPrecio!=="" &&
            this.state.numberItem!=="" && 
            this.state.selectCategory!=="" && 
            this.state.descriptionProduct!=="" && 
            this.state.check!=="") {

                //Send the message to Firebase 
                fire.database().ref('registros/productos').push().set({
                    imageSrc: this.state.imageSrc,
                    email: this.state.email,
                    date: this.state.date,
                    statePais: this.state.statePais,
                    city: this.state.city,
                    codigoPostal: this.state.codigoPostal,
                    address: this.state.address,
                    nombreProducto: this.state.nombreProducto,
                    numberPrecio: this.state.numberPrecio,
                    numberItem: this.state.numberItem,
                    selectCategory: this.state.selectCategory,
                    descriptionProduct: this.state.descriptionProduct,
                    check: this.state.check
                })
                .then(function () {
                    document.querySelector('.alert').style.display = 'block';
                    setTimeout(function() {
                      document.querySelector('.alert').style.display = 'none';
                    }, 3000);

                    this.setState({
                        //state: ""
                    });
                })
                .catch(function (error) {
                    console.log('detectado un error:', error);
                });

             } else {
                if(this.state.email === "") { 
                    this.showValidationErr("email", "No puede estar vacio el campo de usuario!");
                 } if(this.state.date === "") {
                     this.showValidationErr("date", "Invalido!");
                 } if(this.state.statePais === "") {
                     this.showValidationErr("statePais", "Invalido!");
                 } if(this.state.city === "") {
                     this.showValidationErr("city", "Invalido!");
                 } if(this.state.codigoPostal === "") {
                     this.showValidationErr("codigoPostal", "Invalido!");
                 } if(this.state.address === "") {
                     this.showValidationErr("address", "Invalido!");
                 } if(this.state.nombreProducto === "") {
                     this.showValidationErr("nombreProducto", "Invalido!");
                 } if(this.state.numberPrecio === "") {
                     this.showValidationErr("numberPrecio", "Invalido!");
                 } if(this.state.numberItem === "") {
                     this.showValidationErr("numberItem", "Invalido!");
                 } if(this.state.selectCategory === "") {
                     this.showValidationErr("selectCategory", "Invalido!");
                 } if(this.state.descriptionProduct === "") {
                     this.showValidationErr("descriptionProduct", "Invalido!");
                 } if(this.state.check === "") {
                     this.showValidationErr("check", "Invalido!")
                 }
             }
        
    }
    

    render(){
        let status = this.state;
        let emailErr = null, 
            fechaErr = null, 
            paisErr = null, 
            ciudadErr = null,
            codigoPostalErr = null,
            direccionErr = null,
            nombreProductErr = null,
            precioErr = null,
            itemErr = null,
            categoryErr = null,
            descriptionErr = null,
            checkErr = null,

            labelClass  = `uploader ${status.loaded && 'loaded'}`;
            for (let err of this.state.errors) {
                if(err.elm === "email") {
                    emailErr = err.msg;
                } if (err.elm === "date") {
                    fechaErr = err.msg;
                } if (err.elm === "statePais"){
                    paisErr = err.msg;
                } if (err.elm === "city") {
                    ciudadErr = err.msg
                } if (err.elm === "codigoPostal") {
                    codigoPostalErr = err.msg
                } if (err.elm === "address") {
                    direccionErr = err.msg
                } if (err.elm === "nombreProducto") {
                    nombreProductErr  = err.msg
                } if (err.elm === "numberPrecio") {
                    precioErr = err.msg
                } if (err.elm === "numberItem") {
                    itemErr = err.msg
                } if (err.elm === "selectCategory") {
                    categoryErr = err.msg
                } if (err.elm === "descriptionProduct") {
                    descriptionErr = err.msg
                } if (err.elm === "check") {
                    checkErr = err.msg
                } 
            }

        return (
            <div>
             <NavbarRoute></NavbarRoute>
             <div className="container">
               <FormProducts 

                    emailErr={ emailErr }
                    fechaErr={ fechaErr }
                    paisErr={ paisErr }
                    ciudadErr={ ciudadErr }
                    codigoPostalErr={ codigoPostalErr }
                    direccionErr={ direccionErr }
                    nombreProductErr={ nombreProductErr }
                    precioErr={ precioErr }
                    itemErr={ itemErr }
                    categoryErr={ categoryErr }
                    descriptionErr={ descriptionErr }
                    checkErr={ checkErr }

                    labelClass={labelClass}
                    loaded={status.loaded}
                    uploadValue={status.uploadValue}
                    imageSrc={status.imageSrc}
                    
                    onFileChange={this.onFileChange.bind(this)}
                    handleFormInput={this.handleFormInput.bind(this)}
                    submitResgisterItem={this.submitResgisterItem.bind(this)}>

              </FormProducts>
             </div>
            </div>
            
        );
    }
}

export default ProductsUpload;