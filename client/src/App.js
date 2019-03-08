import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import AppNavbar from './components/AppNavbar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar/>
      </div>
    );
  }
}

export default App;
