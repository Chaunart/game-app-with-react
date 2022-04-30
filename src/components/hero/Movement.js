import { useState } from 'react';
import Collision from '../dungeon/Collision';
import { pathList} from '../dungeon/Dungeon';


function generateStart(pathList){
    let position = Math.floor(Math.random() * (pathList.length));
    let start = pathList[position];
    return start;
}

const start = generateStart(pathList);

export default function Movement() {

    const [positionX, setX] = useState((start.x*64)-24);
    const [positionY, setY] = useState((start.y*64)-13);
    const {checkCollision} = Collision(positionX, positionY);
    const stepSize = 4;

    const states = {
        DOWN_WALK: 4,
        UP_WALK: 5,
        LEFT_WALK: 6,
        RIGHT_WALK: 7,
    };

    function walk(state) {
        if (state === states.DOWN_WALK){
            if(checkCollision(1)) setY((prev) => (prev - stepSize));
            else setY((prev) => (prev + stepSize));
        }
        if(state === states.UP_WALK){
            if (checkCollision(2)) setY((prev) => (prev + stepSize));
            else setY((prev) => (prev - stepSize));
        }
        if(state === states.LEFT_WALK){
            if(checkCollision(3)) setX((prev) => (prev + stepSize));
            else setX((prev) => (prev - stepSize));
        }
        if(state === states.RIGHT_WALK){
            if(checkCollision(4)) setX((prev) => (prev - stepSize));
            else setX((prev) => (prev + stepSize));
        }
    
    };



    function changeStart(){
        let newStart = generateStart(pathList)
        setX((newStart.x*64)-24);
        setY((newStart.y*64)-13);
    
    }

    return {walk, positionX, positionY, changeStart}
}
