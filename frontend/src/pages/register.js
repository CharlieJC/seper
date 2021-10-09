import React, { Component } from 'react';
import RegisterForm from '../components/registerForm';

class registerPage extends Component {
  
    render() {
      return (
        <div className="container">
          <h2>Register an account!</h2>
          <RegisterForm/>
        </div>
      );
  }
  }

export default registerPage;  