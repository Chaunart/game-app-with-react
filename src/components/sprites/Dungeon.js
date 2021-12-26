import React from 'react';
import Sprite from './Sprite.js';
import MapSprite from './Map.png';
//import { useState } from 'react';

const GRID_HEIGHT = 13;
const GRID_WIDTH = 13;
const MAX_ROOMS = 5;
const ROOM_SIZE_RANGE = {min:2, max:4};


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


function isRoomValid(grid, x, y, roomSize){
    for (let i = y; i < ( roomSize + y + 1); i++) {
		for (let j = x; j < ( roomSize + x + 1); j++) {
            if (grid[j][i] === 1){return false};
		}
    }
    return true;
}


function placeRoom(grid){
    let y = Math.floor(Math.random() * (GRID_HEIGHT-ROOM_SIZE_RANGE.max-1)) + 1;
    let x = Math.floor(Math.random() * (GRID_WIDTH-ROOM_SIZE_RANGE.max-1)) + 1;
    let roomSize = Math.floor(Math.random() * ROOM_SIZE_RANGE.max) + ROOM_SIZE_RANGE.min;

    if (isRoomValid(grid, x, y, roomSize) === true ){
        for (let i = y; i < ( roomSize + y ); i++) {
		    for (let j = x; j < ( roomSize + x ); j++) {
                grid[i][j] = 1;
		    }
	    }   
    }
}


function generateRooms(grid) {
    let roomNumber = Math.floor(Math.random() * MAX_ROOMS) + 3;
    for (let i = 0; i < roomNumber; i++) {
        placeRoom(grid)
    }
}


function rewriteMap(grid){
    for (let i = 0; i < GRID_HEIGHT; i++) {
		for (let j = 0; j < GRID_WIDTH; j++) {
            if (grid[i][j] === 0){
                let data = {step:1, dir:2, h: 64, w: 64}
                grid[i][j] = data;
            } else {
                let data = {step:1, dir:1, h: 64, w: 64}
                grid[i][j] = data;
            }
		}
	}
    let dungeon = grid;
    return dungeon;
}

export const Dungeon = () => {

    const grid = createMap();
    generateRooms(grid);
    const dungeon = rewriteMap(grid);

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
