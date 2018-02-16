import React, { Component } from 'react';
import './App.css';
import NavBarLeft from './components/NavBarLeft';
import { BrowserRouter as Router, Route } from "react-router-dom";

// import NavBarTop from './components/NavBarTop';
import Slide from './components/Slide';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <div>
          <NavBarLeft/>

          <div className="main">
          <Route path="/slide" component={Slide} />
          </div>

        </div>
      </Router>

      </div>
    );
  }
}

export default App;
