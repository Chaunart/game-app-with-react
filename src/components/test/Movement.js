import { useState } from 'react';
import Collision from './Collision';
import { pathList, gamewidth, gameheight } from './Dungeon';


function generateStart(pathList){
    let position = Math.floor(Math.random() * (pathList.length));
    let start = pathList[position];
    return start;
}

const start = generateStart(pathList);

const tileSize = 64;

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

/*    function walk(state) {
        if(checkCollision()){
            if (state === states.DOWN_WALK){
                if(positionY > gameheight-tileSize-61) setY(gameheight-tileSize-55);
                else setY((prev) => (prev + stepSize));
            }
            if(state === states.UP_WALK){
                if (positionY < tileSize-10) setY(tileSize-11);
                else setY((prev) => (prev - stepSize));
            }
            if(state === states.LEFT_WALK){
                if(positionX  < tileSize-20) setX(tileSize-27);
                else setX((prev) => (prev - stepSize));
            }
            if(state === states.RIGHT_WALK){
                if(positionX > gamewidth-61-tileSize) setX(gamewidth-58-tileSize);
                else setX((prev) => (prev + stepSize));
            }
        }
        
    };
*/

function walk(state) {
        if (state === states.DOWN_WALK){
            if(checkCollision() === "collide") setY((prev) => (prev - (stepSize+2)));
            else setY((prev) => (prev + stepSize));
        }
        if(state === states.UP_WALK){
            if (checkCollision() === "collide") setY((prev) => (prev + (stepSize+2)));
            else setY((prev) => (prev - stepSize));
        }
        if(state === states.LEFT_WALK){
            if(checkCollision() === "collide") setX((prev) => (prev + (stepSize+2)));
            else setX((prev) => (prev - stepSize));
        }
        if(state === states.RIGHT_WALK){
            if(checkCollision() === "collide") setX((prev) => (prev - (stepSize+2)));
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
