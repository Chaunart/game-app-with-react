import React from 'react';
import { grid, GRID_HEIGHT, GRID_WIDTH } from './Dungeon';
import State from './State.js';


function exitCollision(grid){
    let exitCoordinate = {x:0, y:0};
    grid.forEach(( tile, index1 ) => { 
        tile.forEach((data, index2)  => {
            if(data.column===2 && data.row===2){
                exitCoordinate = {x:index2, y:index1};
            }
        })
    });
    return exitCoordinate;
}


function collisionMaker(grid){
    for (let i = 0; i < GRID_HEIGHT; i++) {
		for (let j = 0; j < GRID_WIDTH; j++) {
            if (grid[i][j] === 0){
                
            }
		}
	}
}


export const Collision = () => {

    const {currentState, positionX, positionY, changeState, currentAnimationState} = State();
    

    /*
    context.strokeStyle = 'blue';
        context.strokeRect(positionX+29, positionY + 13, 27, 40);
    */ 



    return null
}
export default Collision;