import React, { Component } from 'react';
import './App.css';
import Player from './components/test/Player';
//import { Hero } from './components/sprites/Hero.js';
//import { Dungeon } from './components/sprites/dungeon/Dungeon.js';


class App extends Component {
  render (){
    return (
      <div id='App'>
        <React.StrictMode>
          <Player />
        </React.StrictMode>
      </div>
    );
  }
}

export default App 


/*
  <Canvas />
<Dungeon />     
*/ 