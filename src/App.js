import React from 'react';
import './App.css';
import { Component } from 'react';


class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: 'frank',
          id: 'a'
        },
        {
          name: 'frank2',
          id: 'a2'
        },
        {
          name: 'frank3',
          id: 'a3'
        }
      ]
    };
  }

  render() {
      return (
        <div className="App">
          {this.state.monsters.map(monster => (
            <h1 key={monster.id}> {monster.name}</h1>
          ))}
        </div>
      );
    } 
  }


export default App;
