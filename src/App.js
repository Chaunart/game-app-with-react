import { Component } from 'react';
import './App.css';
import { Hero } from './components/sprites/Hero.js';
import { Dungeon } from './components/sprites/Dungeon.js';


class App extends Component {
  render (){
    return (
      <div className='App'>
        <Dungeon />
        <Hero />
      </div>
    );
  }
}

export default App 


// 