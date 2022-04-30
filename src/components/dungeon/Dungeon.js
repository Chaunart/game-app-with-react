import DungeonSprite from './Map.png';
import { createPath } from './Path.js';
import { generateRooms } from './Room.js';

const dungeonImage = new Image();
dungeonImage.src = DungeonSprite;

export const tileSize = 64;
const scaleSize = tileSize*1;

export const GRID_HEIGHT = 13;
export const GRID_WIDTH = 13;
const MAX_ROOMS = 2;
const ROOM_SIZE_RANGE = {min:2, max:3};
const PATH_RANGE = 20;
export let grid = createMap();

export const gamewidth = GRID_HEIGHT*tileSize;
export const gameheight = GRID_WIDTH*tileSize;
export let pathList = createPath( GRID_HEIGHT, GRID_WIDTH, PATH_RANGE, ROOM_SIZE_RANGE.max);
export let exit;


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
    exit = pathList[position];
    grid[exit.y][exit.x] = 2; 
}

function rewriteMap(grid){
    let dungeon = createMap();
    //wege und co
    for (let i = 0; i < GRID_HEIGHT; i++) {
		for (let j = 0; j < GRID_WIDTH; j++) {
            if (grid[i][j] === 0){
                let data = {column:1, row:2}; //lawn
                dungeon[i][j] = data;
            } else if (grid[i][j] === 1){
                let data = {column:1, row:1}; //floor
                dungeon[i][j] = data;
            } else {
                let data = {column:2, row:2}; // exit
                dungeon[i][j] = data;
            }
		}
	}
    // wand
    for (let i = 1; i < GRID_HEIGHT-1; i++) {
		for (let j = 1; j < GRID_WIDTH-1; j++) {
            
            if (grid[i][j] !== 0){
                if(grid[i-1][j] === 0){
                    dungeon[i-1][j] = {column:1, row:0}; //wand oben
                }
                if(grid[i+1][j] === 0){
                    dungeon[i+1][j] = {column:2, row:3}; //wand unten
                }
                if(grid[i][j-1] === 0){
                    dungeon[i][j-1] = {column:0, row:2}; //wand links
                }
                if(grid[i][j+1] === 0){
                    dungeon[i][j+1] = {column:3, row:1};//wand rechts
                }
                if(grid[i-1][j-1] === 0 && grid[i-1][j] === 0 && grid[i][j-1] === 0){
                    dungeon[i-1][j-1] = {column:0, row:0}; //wand ecke oben links
                }
                if(grid[i-1][j+1] === 0 && grid[i-1][j] === 0 && grid[i][j+1] === 0){
                    dungeon[i-1][j+1] = {column:3, row:0}; //wand ecke oben rechts
                }
                if(grid[i+1][j-1] === 0 && grid[i][j-1] === 0 && grid[i+1][j] === 0){
                    dungeon[i+1][j-1] = {column:0, row:3}; //wand ecke unten links
                }
                if(grid[i+1][j+1] === 0 && grid[i+1][j] === 0 && grid[i][j+1] === 0){
                    dungeon[i+1][j+1] = {column:3, row:3}; //wand ecke unten rechst
                }
            }
		}
	}

    for (let i = 1; i < GRID_HEIGHT-1; i++) {
		for (let j = 1; j < GRID_WIDTH-1; j++) {
            if(grid[i][j] === 0){
                
                if (grid[i+1][j] !== 0 && grid[i][j-1] !== 0){    
                    dungeon[i][j] = {column:3, row:2}; //inverse unten links
                }
                if (grid[i+1][j] !== 0 && grid[i][j+1] !== 0){    
                    dungeon[i][j] = {column:2, row:0}; //inverse unten rechts
                }
                if (grid[i+1][j] !== 0 && grid[i-1][j] !== 0){    
                    dungeon[i][j] = {column:6, row:3}; //inverse unten oben
                }

                if (grid[i-1][j] !== 0 && grid[i][j+1] !== 0){    
                    dungeon[i][j] = {column:0, row:1}; //inverse oben rechts
                }
                if (grid[i-1][j] !== 0 && grid[i][j-1] !== 0){    
                    dungeon[i][j] = {column:1, row:3}; //inverse oben links
                }

                if (grid[i][j+1] !== 0 && grid[i][j-1] !== 0){    
                    dungeon[i][j] = {column:4, row:1}; //inverse rechts links
                }

                if(grid[i][j-1] === 0 && grid[i][j+1] === 0 && grid[i+1][j] === 0 && grid[i-1][j] !== 0 && (grid[i+1][j-1] !== 0 || grid[i+1][j+1] !== 0)){
                    dungeon[i][j] = {column:3, row:4};// T nach unten, oben zu
                }
                if(grid[i][j-1] === 0 && grid[i][j+1] === 0 && grid[i+1][j] === 0 && grid[i+1][j-1] !== 0 && grid[i+1][j+1] !== 0){
                    dungeon[i][j] = {column:5, row:0};// T nach unten, oben offen
                }
                if(grid[i][j-1] === 0 && grid[i][j+1] === 0 && grid[i-1][j] === 0 && grid[i+1][j] !== 0 && (grid[i-1][j-1] !== 0 || grid[i-1][j+1] !== 0)){
                    dungeon[i][j] = {column:4, row:4};// T oben, unten zu
                }
                if(grid[i][j-1] === 0 && grid[i][j+1] === 0 && grid[i-1][j] === 0 && grid[i-1][j-1] !== 0 && grid[i-1][j+1] !== 0){
                    dungeon[i][j] = {column:5, row:4}; // T oben, unten offen
                }
                if(grid[i-1][j] === 0 && grid[i+1][j] === 0 && grid[i][j-1] === 0 && grid[i][j+1] !== 0 && (grid[i-1][j-1] !== 0 || grid[i+1][j-1] !== 0)){
                    dungeon[i][j] = {column:1, row:4}; // T links, rechts zu
                }
                if(grid[i-1][j] === 0 && grid[i+1][j] === 0 && grid[i][j-1] === 0 && grid[i-1][j-1] !== 0 && grid[i+1][j-1] !== 0){
                    dungeon[i][j] = {column:7, row:4}; // T links, rechst offen
                }
                if(grid[i-1][j] === 0 && grid[i+1][j] === 0 && grid[i][j+1] === 0 && grid[i][j-1] !== 0 && (grid[i-1][j+1] !== 0 || grid[i+1][j+1] !== 0)){
                    dungeon[i][j] = {column:0, row:4};// T rechts, links zu
                }
                if(grid[i-1][j] === 0 && grid[i+1][j] === 0 && grid[i][j+1] === 0 && grid[i-1][j+1] !== 0 && grid[i+1][j+1] !== 0){
                    dungeon[i][j] = {column:6, row:4};// T rechts, links offen
                }

                if (grid[i+1][j] !== 0 && grid[i][j-1] !== 0 && grid[i-1][j] !== 0){
                    dungeon[i][j] = {column:5, row:3}; //inverse unten links oben
                }
                if (grid[i+1][j] !== 0 && grid[i][j-1] !== 0 && grid[i][j+1] !== 0){
                    dungeon[i][j] = {column:4, row:2}; //inverse unten links rechts
                }
                if (grid[i+1][j] !== 0 && grid[i-1][j] !== 0 && grid[i][j+1] !== 0){
                    dungeon[i][j] = {column:7, row:3}; //inverse unten oben rechts
                }

                if (grid[i-1][j] !== 0 && grid[i][j+1] !== 0 && grid[i][j-1] !== 0){
                    dungeon[i][j] = {column:4, row:0}; //inverse oben rechst links 
                }
                
                if(grid[i][j-1] !== 0 && grid[i+1][j] !== 0 && grid[i-1][j] !== 0 && grid[i][j+1] !== 0){
                    dungeon[i][j] = {column:4, row:3}; //inverse unten links oben rechst
                }


                if(grid[i][j-1] === 0 && grid[i+1][j] === 0 && grid[i-1][j] === 0 && grid[i][j+1] === 0 && grid[i+1][j-1] !== 0 && grid[i+1][j+1] !== 0 && grid[i-1][j+1] !== 0 && grid[i-1][j-1] !== 0){
                    dungeon[i][j] = {column:3, row:4}; //kreuz
                }

            }
        }
    }
    return dungeon;
}

pathToMap(grid, pathList);
generateRooms(grid, pathList, MAX_ROOMS, ROOM_SIZE_RANGE);
generateExit(grid, pathList);
let dungeon = rewriteMap(grid);


export function newDungeon(){
    grid = createMap();
    pathList = createPath( GRID_HEIGHT, GRID_WIDTH, PATH_RANGE, ROOM_SIZE_RANGE.max);
    pathToMap(grid, pathList);
    generateRooms(grid, pathList, MAX_ROOMS, ROOM_SIZE_RANGE);
    generateExit(grid, pathList);
    dungeon = rewriteMap(grid);
    return
}

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


    return  {drawDungeon, gameheight, gamewidth}
    
}
export default Dungeon;