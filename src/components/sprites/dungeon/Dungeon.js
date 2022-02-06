import React from 'react';
import Sprite from '../Sprite.js';
import MapSprite from './Map.png';
import { createPath } from './Path.js';
import { generateRooms } from './Room.js';

const GRID_HEIGHT = 13;
const GRID_WIDTH = 13;
const MAX_ROOMS = 2;
const ROOM_SIZE_RANGE = {min:2, max:3};
const PATH_RANGE = 20;
let grid = createMap();
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
                let data = {step:1, dir:2, h: 64, w: 64};
                grid[i][j] = data;
            } else if (grid[i][j] === 1){
                let data = {step:1, dir:1, h: 64, w: 64};
                grid[i][j] = data;
            } else {
                let data = {step:2, dir:2, h: 64, w: 64};
                grid[i][j] = data;
            }
		}
	}
    let dungeon = grid;
    return dungeon;
}

export const Dungeon = () => {

    pathToMap(grid, pathList);
    generateRooms(grid, pathList, MAX_ROOMS, ROOM_SIZE_RANGE);
    generateExit(grid, pathList);
    let dungeon = rewriteMap(grid);

    return (
        <div >
            {
                dungeon.map(( tile, index1 ) => tile.map(( data, index2 ) => 
                        <Sprite 
                        image={MapSprite} 
                        position = {{x:(index2*64), y:(index1*64)}}
                        data={data}
                        />)
                        )
              
            }
        </div>
    )
}
