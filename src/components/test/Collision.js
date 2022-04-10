import { grid, exit, tileSize, GRID_HEIGHT, GRID_WIDTH } from './Dungeon';

const exitBorder = {x:26, y:26}; // 64/64
const playerBorder = {x:27, y:40}; // 85/85


function createCollision() {
    let collisionVec = [];
    for (let i = 0; i < GRID_HEIGHT; i++) {
        for (let j = 0; j < GRID_WIDTH; j++) {
            if (grid[i][j] === 0){
                collisionVec.push({x:j*tileSize, y:i*tileSize});
            }
        }
    }
    return collisionVec;
}

const walls = createCollision();


export const Collision = (positionX, positionY) => {

    const exitVec = {x:(exit.x*tileSize)+((tileSize-exitBorder.x)/2), 
                        y:(exit.y*tileSize)+((tileSize-exitBorder.y)/2), 
                        width:exitBorder.x, height:exitBorder.y};
    const playerVec = {x: positionX + 29, y: positionY + 13, 
                        width: playerBorder.x, height: playerBorder.y};

/* 
   function checkCollision() {
        let any_collision = true; 
        for(let wall = 0; wall < walls.length; wall++){
            if ((walls[wall].x >= playerVec.x + playerVec.width ||
                walls[wall].x + tileSize <= playerVec.x ) &&
                (walls[wall].y >= playerVec.y + playerVec.height ||
                walls[wall].y + tileSize <= playerVec.y)) {

                   any_collision = false;
            }
        }
        return any_collision;
    }

function checkCollision() {
    let any_collision = false;
        for (let wall = 0; wall < walls.length; wall++) {
			if( walls[wall].x > playerVec.x + playerVec.width ||
                walls[wall].x + tileSize < playerVec.x||
                walls[wall].y > playerVec.y + playerVec.height||
                walls[wall].y + tileSize < playerVec.y){
			    any_collision = true;
		    }
        }
    return any_collision;
}



*/

function checkCollision() {
    //let any_collision = true;
    let grrr = "collide";
			if( walls[14].x > playerVec.x + playerVec.width ||
                walls[14].x + tileSize < playerVec.x ||
                walls[14].y > playerVec.y + playerVec.height ||
                walls[14].y + tileSize < playerVec.y){
			    //any_collision = false;
                grrr = "not";
		    }
    //console.log(grrr);
    return grrr;
}


    const drawCollisionFloor = (context) => {
        context.strokeStyle = 'white';
        for (let i = 0; i < GRID_HEIGHT; i++) {
            for (let j = 0; j < GRID_WIDTH; j++) {
                if (grid[i][j] !== 0){
                    context.strokeRect(j*tileSize, i*tileSize, tileSize, tileSize);
                }
            }
        }
    }       

    const drawCollisionPlayer = (context, gameFrame) => {
        context.strokeStyle = 'blue';
        context.strokeRect(positionX + 29, positionY + 13, playerBorder.x, playerBorder.y);
    } 

    const drawCollisionExit = (context) => {
        context.strokeStyle = 'blue';
        context.strokeRect((exit.x*tileSize)+((tileSize-exitBorder.x)/2),
         (exit.y*tileSize)+((tileSize-exitBorder.y)/2), exitBorder.x, exitBorder.y);
    }

    return {drawCollisionExit, drawCollisionPlayer, drawCollisionFloor, checkCollision, exitVec, playerVec}
}
export default Collision;