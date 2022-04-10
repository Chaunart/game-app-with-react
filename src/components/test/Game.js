import React, { useRef } from 'react';
import useAnimation from './useAnimation';
//import useMapping from './useMapping';
import Player from './Player';
import Dungeon from './Dungeon';
import Collision from './Collision';




export const Game = () => {

    const {drawDungeon, gameheight, gamewidth} = Dungeon();   
    const {drawHero, positionX, positionY} = Player();
    const {drawCollisionExit, drawCollisionPlayer, drawCollisionFloor} = Collision(positionX, positionY);

    const canvasRef = useRef(null);

    useAnimation(drawHero, drawDungeon, drawCollisionExit, drawCollisionPlayer,  drawCollisionFloor, canvasRef);



    return  <canvas style = {{ 
                    border: '2px solid white',
                    }}
                    width = {gamewidth} 
                    height ={gameheight}
                    ref = {canvasRef} 
            />
    
}
export default Game;