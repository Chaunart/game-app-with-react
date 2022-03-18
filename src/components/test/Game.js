import React, { useRef } from 'react';
import useAnimation from './useAnimation';
//import useMapping from './useMapping';
import Player from './Player';
import Dungeon from './Dungeon';




export const Game = () => {

    const {drawDungeon, gameheight, gamewidth} = Dungeon();   
    const {drawHero} = Player();

    const canvasRef = useRef(null);

    useAnimation(drawHero,  drawDungeon, canvasRef);



    return  <canvas style = {{ 
                    border: '2px solid white',
                    }}
                    width = {gamewidth} 
                    height ={gameheight}
                    ref = {canvasRef} 
            />
    
}
export default Game;