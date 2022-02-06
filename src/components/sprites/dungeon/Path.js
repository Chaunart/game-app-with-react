function randomDirection(){
    /*
    0 oben
    1 unten
    2 links
    3 rechst
    */ 
    let dir =  Math.floor(Math.random() * 4);
    return dir;
}

export function createPath (GRID_HEIGHT, GRID_WIDTH, PATH_RANGE, ROOM_SIZE_RANGE) {
    let y = Math.floor(Math.random() * (GRID_HEIGHT-5)) + 1;
    let x = Math.floor(Math.random() * (GRID_WIDTH-5)) + 1;
    let position = {y:y, x:x};
    let pathList = [];
    pathList.push(position);


    for (let i = 0; i < PATH_RANGE; i++){

        switch (randomDirection()){
            case 0:
                for (let j = 0; y > 1 || j < (Math.floor(Math.random() * y)) ; j++){
                    y = y - 1;
                    let tmpPosition = {y:y, x:x};
                    pathList.push(tmpPosition);
                };
                break;
            case 1:
                for (let j = 0; j < (Math.floor(Math.random() * (GRID_HEIGHT-y-ROOM_SIZE_RANGE-1))); j++){
                  y = y + 1;
                   let tmpPosition = {y:y, x:x};
                 pathList.push(tmpPosition);
                }
                break;
            case 2:
                for (let j = 0 ; j < (Math.floor(Math.random() * (GRID_WIDTH-x-ROOM_SIZE_RANGE-1))); j++){
                    x = x + 1;
                    let tmpPosition = {y:y, x:x};
                    pathList.push(tmpPosition);
                }
                break;
            case 3:
                for (let j = 1; j < (Math.floor(Math.random() * x)) || x > 1; j++){
                    x = x - 1;
                    let tmpPosition = {y:y, x:x};
                    pathList.push(tmpPosition);
                }
                break;
            default:
                break;
        };
    }

    return pathList;
}