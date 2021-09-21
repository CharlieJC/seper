import Table from "../components/evidencetable.js";
import tablecolumns from "../components/tablecolumns.js";
import React, { Component } from 'react';
import axios from 'axios';


class SEPractice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:8082/api/practices')
      .then(res => {
        this.setState({
          articles: res.data
        })
      })
      .catch(err =>{
        console.log('Error from SEPractice');
      })
  };

  render() {
    const articles = this.state.articles;
    return (
      <div className="container">
        <h2>Select SEs Practice to get evidence for the claimed benefits</h2>
                 <Table
                  data={articles}
                  columns={tablecolumns}
                 />
      </div>
    );
}
}
 
export default SEPractice;  