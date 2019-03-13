import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import AppNavbar from './components/AppNavbar'

import ChurchList from './components/ChurchList'

const App = props => {
  return (
    <div className="App">
      <AppNavbar/>
      <ChurchList/>
    </div>
  )
}

export default App;
