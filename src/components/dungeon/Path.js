function randomDirection(){
    /*
    0 oben
    1 unten
    2 rechts
    3 links
    */ 
    let dir =  Math.floor(Math.random() * 4);
    return dir;
}

export function createPath (GRID_HEIGHT, GRID_WIDTH, PATH_RANGE, ROOM_SIZE_RANGE) {
    let y = Math.floor(Math.random() * (GRID_HEIGHT-7)) + 2;
    let x = Math.floor(Math.random() * (GRID_WIDTH-7)) + 2;
    let position = {y:y, x:x};
    let pathList = [];
    pathList.push(position);


    for (let i = 0; i < PATH_RANGE; i++){
        let steps = Math.random();
        switch (randomDirection()){
            case 0: //oben
                for (let j = 2; y > 2 || j < (Math.floor(steps * y))-2 ; j++){
                    y = y - 1;
                    let tmpPosition = {y:y, x:x};
                    pathList.push(tmpPosition);
                };
                break;
            case 1: //unten
                for (let j = 0; j < (Math.floor(steps * (GRID_HEIGHT-y-ROOM_SIZE_RANGE-2))) || y > GRID_HEIGHT-2; j++){
                  y = y + 1;
                   let tmpPosition = {y:y, x:x};
                 pathList.push(tmpPosition);
                }
                break;
            case 2: //rechts
                for (let j = 0 ; j < (Math.floor(steps * (GRID_WIDTH-x-ROOM_SIZE_RANGE-2))) || x > GRID_WIDTH-2; j++){
                    x = x + 1;
                    let tmpPosition = {y:y, x:x};
                    pathList.push(tmpPosition);
                }
                break;
            case 3: //links
                for (let j = 2; j < (Math.floor(steps * x))-2 || x > 2; j++){
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