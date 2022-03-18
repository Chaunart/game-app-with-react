import { useState } from 'react';
import { pathList, gamewidth, gameheight } from './Dungeon';
import { spriteSize } from './Player';


function generateStart(pathList){
    let position = Math.floor(Math.random() * (pathList.length));
    let start = pathList[position];
    return start;
}

const start = generateStart(pathList);

export default function Movement() {

    const [positionX, setX] = useState((start.x*64)-24);
    const [positionY, setY] = useState((start.y*64)-13);

    const stepSize = 4;

    const states = {
        DOWN_WALK: 4,
        UP_WALK: 5,
        LEFT_WALK: 6,
        RIGHT_WALK: 7,
    };

    function walk(state) {
        if (state === states.DOWN_WALK){
            if(positionY > gameheight-61) setY(gameheight-55);
            else setY((prev) => (prev + stepSize));
        }
        if(state === states.UP_WALK){
            if (positionY < -10) setY(-11);
            else setY((prev) => (prev - stepSize));
        }
        if(state === states.LEFT_WALK){
            if(positionX < -20) setX(-27);
            else setX((prev) => (prev - stepSize));
        }
        if(state === states.RIGHT_WALK){
            if(positionX > gamewidth-61) setX(gamewidth-58);
            else setX((prev) => (prev + stepSize));
        }
        
    };

    return {walk, positionX, positionY}
}
