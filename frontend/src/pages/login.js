import React, { Component } from 'react';
import LoginForm from '../components/loginForm';

class loginPage extends Component {
  
    render() {
      return (
        <div className="container">
          <h2>Login to your account!</h2>
          <LoginForm/>
        </div>
      );
  }
  }

export default loginPage;  