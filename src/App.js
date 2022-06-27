import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Component } from 'react';


class App extends Component {
  constructor() {
    super();

    this.state = {
      string: 'hello yousssef'
    };
  }

  render() {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>{this.state.string}</p>
            <button onClick={() => this.setState({string: 'hello ysf'})}>Clic</button>
          </header>
        </div>
      );
    } 
  }


export default App;
