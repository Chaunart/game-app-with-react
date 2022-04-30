import { grid, exit, tileSize, GRID_HEIGHT, GRID_WIDTH } from './Dungeon';

const playerBorder = {x:27, y:40}; // 85/85

const checkWall = (playerVec, boolean, xStep, yStep, movement) => {

    let firstXTilePosition = Math.floor((playerVec.x + xStep) / 64);
    let firstYTilePosition = Math.floor((playerVec.y + yStep) / 64);
    let secondXTilePosition, secondYTilePosition;

    if (movement === 'yMove' ) {
        secondXTilePosition  = Math.floor((playerVec.x + xStep + playerVec.width) / 64);
        secondYTilePosition  = Math.floor((playerVec.y + yStep) / 64);
    } else {
        secondXTilePosition  = Math.floor((playerVec.x + xStep) / 64);
        secondYTilePosition  = Math.floor((playerVec.y + yStep + playerVec.height) / 64);
    }
    
    if(grid[firstYTilePosition][firstXTilePosition] === 0){
       boolean = true;
    }
    if(grid[secondYTilePosition][secondXTilePosition] === 0){
        boolean = true;
    }

    return boolean;
}

export const Collision = (positionX, positionY) => {

    const exitVec = {x:exit.x*tileSize, y:exit.y*tileSize, width:tileSize, height:tileSize};
    const playerVec = {x: positionX + 29, y: positionY + 13, 
                        width: playerBorder.x, height: playerBorder.y};

    function checkCollision(direction) {
        let boolean = false;
        switch (direction) {
            case 1:
                //downWalk
                boolean = checkWall(playerVec, boolean, 0, 3+playerVec.height, 'yMove');
                break;
            case 2:
                //upWalk
                boolean = checkWall(playerVec, boolean, 0, -4, 'yMove');
                break;
            case 3:
                //leftWalk
                boolean = checkWall(playerVec, boolean, -4, 0, 'xMove');
                break;
            case 4:
                //rightWalk
                boolean = checkWall(playerVec, boolean, 3+playerVec.width, 0, 'xMove');
                break;
            default:
                break;
        }

        return boolean;
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
        context.strokeRect(exit.x*tileSize, exit.y*tileSize, tileSize, tileSize)
    }

    return {drawCollisionExit, drawCollisionPlayer, drawCollisionFloor, checkCollision, exitVec, playerVec}
}
export default Collision;