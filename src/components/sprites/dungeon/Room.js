function placeRoom(grid, pathList, ROOM_SIZE_RANGE){
    let position = Math.floor(Math.random() * (pathList.length));
    let roomStart = pathList[position];
    let roomSize = Math.floor(Math.random() * ROOM_SIZE_RANGE.max) + ROOM_SIZE_RANGE.min;

    for (let i = roomStart.y; i < ( roomSize + roomStart.y ); i++) {
	    for (let j =  roomStart.x; j < ( roomSize + roomStart.x ); j++) {
            grid[i][j] = 1;
	    }
	}   
}

export function generateRooms(grid, pathList, MAX_ROOMS, ROOM_SIZE_RANGE) {
    let roomNumber = Math.floor(Math.random() * MAX_ROOMS) + 2;
    for (let i = 0; i < roomNumber; i++) {
        placeRoom(grid, pathList, ROOM_SIZE_RANGE)
    }
}