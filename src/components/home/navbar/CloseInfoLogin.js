import React from 'react';

import './navar.css';

export default class CloseInfoLogin extends React.Component {
  
  closeInfoLogin(e) {
    //this.setState(e.target.value);
    window.location.href = "http://localhost:3000/login";
  }

  render() {
    return (
      <div>
        <li className="col" onClick={this.closeInfoLogin}><i className="fas fa-sign-out-alt"></i></li>
      </div>
    );
  }
}