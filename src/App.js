import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

class App extends Component {
  constructor() {
    super();

    this.state = {
      message: ''
    }
  }
// Double parenthesis in setState so you dont have to do return method. Works the same way
  componentDidMount() {
    axios.get('/api/test')
    .then(response => {
      console.log(response)
      this.setState(() => ({
        message: response.data
      }))
    })
    .catch(err => {
      console.log(err)
    })
  }
  render() {
    return (
      <div className="App">
        {this.state.message}
        
      </div>
    );
  }
}

export default App;
