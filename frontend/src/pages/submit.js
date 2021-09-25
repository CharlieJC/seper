import React, { Component } from 'react';
import SubmissionForm from '../components/submissionForm.js';

class submissionPage extends Component {
  
    render() {
      return (
        <div className="container">
          <h2>Submit an academic article for review</h2>
          <SubmissionForm/>
        </div>
      );
  }
  }

export default submissionPage;  