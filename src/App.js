import React, { Component } from 'react';
import './App.css';
import Game from './components/test/Game';
//import { Hero } from './components/sprites/Hero.js';
import { Dungeon } from './components/sprites/dungeon/Dungeon.js';


class App extends Component {
  render (){
    return (
      <div id='App'>

          <Game />
          
      </div>
    );
  }
}

export default App 
