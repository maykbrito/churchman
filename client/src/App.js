import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import AppNavbar from './components/AppNavbar'
import AppFooter from './components/AppFooter'

const App = props => {
  return (
    <div className="App">
      <AppNavbar/>
      <AppFooter/>
    </div>
  )
}

export default App;
