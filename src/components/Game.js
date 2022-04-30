import React, { useRef } from 'react';
import useAnimation from './hook/useAnimation';
//import useMapping from './useMapping';
import Player from './hero/Player';
import Dungeon from './dungeon/Dungeon';
import Collision from './dungeon/Collision';




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