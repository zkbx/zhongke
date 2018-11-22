import React, { Component } from 'react';

import './App.css';
import CreateRouter from './routes'

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
