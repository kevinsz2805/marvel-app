import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/index.css'
import './MasterTable/styles.css'
import './DetailsTable/style.css'
import MasterContanier from './MasterTable/MasterContanier'

class App extends Component{
    render(){
        return(
            <div className="App">
                
                <div className="col-md-12">
                    <MasterContanier></MasterContanier>
                </div>
                
            </div>
        )
    }
}

export default App;