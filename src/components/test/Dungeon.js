import DungeonSprite from './Map.png';
import { createPath } from './Path.js';
import { generateRooms } from './Room.js';

const dungeonImage = new Image();
dungeonImage.src = DungeonSprite;

const tileSize = 64;
const scaleSize = tileSize*1;

const GRID_HEIGHT = 13;
const GRID_WIDTH = 13;
const MAX_ROOMS = 2;
const ROOM_SIZE_RANGE = {min:2, max:3};
const PATH_RANGE = 20;
let grid = createMap();

const gamewidth = GRID_HEIGHT*tileSize;
const gameheight = GRID_WIDTH*tileSize;



export let pathList = createPath( GRID_HEIGHT, GRID_WIDTH, PATH_RANGE, ROOM_SIZE_RANGE.max);


function createMap(){
    let grid = [];
    for (let y = 0; y < GRID_HEIGHT; y++) {
        let tempGrid = [];
		for (let x = 0; x < GRID_WIDTH; x++) {
			tempGrid.push(0);
		}
        grid.push(tempGrid);
	}

    return grid;
}

function pathToMap(grid, pathList){
    pathList.map((tile) => grid[tile.y][tile.x] = 1 ); 
}

function generateExit(grid, pathList){
    let position = Math.floor(Math.random() * (pathList.length));
    let roomStart = pathList[position];
    grid[roomStart.y][roomStart.x] = 2;
}

function rewriteMap(grid){
    for (let i = 0; i < GRID_HEIGHT; i++) {
		for (let j = 0; j < GRID_WIDTH; j++) {
            if (grid[i][j] === 0){
                let data = {column:1, row:2};
                grid[i][j] = data;
            } else if (grid[i][j] === 1){
                let data = {column:1, row:1};
                grid[i][j] = data;
            } else {
                let data = {column:2, row:2};
                grid[i][j] = data;
            }
		}
	}
    let dungeon = grid;
    return dungeon;
}

pathToMap(grid, pathList);
generateRooms(grid, pathList, MAX_ROOMS, ROOM_SIZE_RANGE);
generateExit(grid, pathList);
let dungeon = rewriteMap(grid);  


export const Dungeon = () => {
    
    const drawDungeon = (context) => {
        dungeon.map(( tile, index1 ) => 
            tile.map(( data, index2 ) => 
                context.drawImage (dungeonImage, 
                    data.column*tileSize, data.row*tileSize, 
                    tileSize, tileSize, 
                    index2*tileSize, index1*tileSize, 
                    scaleSize, scaleSize
                )       
            )
        )
    }


    return  {drawDungeon}
    
}
export default Dungeon;