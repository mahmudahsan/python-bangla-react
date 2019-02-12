/**
 * @author Mahmud Ahsan <https://github.com/mahmudahsan>
 */

import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Cards from './components/Cards';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Navigation />
        <Cards />
      </div>
    );
  }
}

export default App;
