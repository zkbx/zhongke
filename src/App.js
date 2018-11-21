import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CreateRouter from './routes'
import Header from "./components/header"

class App extends Component {
  render() {
    return (
      <div className="App">

       <CreateRouter></CreateRouter>
      </div>
    );
  }

}

export default App;
