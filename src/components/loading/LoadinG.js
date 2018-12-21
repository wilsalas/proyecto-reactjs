import React, { Component } from 'react';

import './Loading.css'

class LoadinG extends Component{
    constructor(props) {
        super(props);
        this.state = { loading: true }
    }

    componentDidMount() {
        // the setTimeout just simulates an async action, after which the component will render the content
      setTimeout(() => this.setState({ loading: false }), 1500);

    }

    render() {
        const { loading } = this.state;
    
        if(loading) { // if your component doesn't have to wait for an async action, remove this block 
          return null; // render null when app is not ready
        }
    
        return (
            <div className="content-loading">
                <div id="app" className="loader"></div> 
            </div>
        );
    }
}

export default LoadinG;