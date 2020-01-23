import React, { Component } from 'react';
import '../styles/index.css';
import './MasterTable/styles.css';
import './DetailsTable/style.css';
import MasterContanier from './MasterTable/MasterContanier';

class App extends Component {
  render() {
    return (
      <div className="App">
          <MasterContanier></MasterContanier>
      </div>
    );
  }
}

export default App;
