import { useState } from 'react';

export default function Movement() {

    const [positionX, setX] = useState(0);
    const [positionY, setY] = useState(0);
    const stepSize = 10;

    const states = {
        DOWN_WALK: 4,
        UP_WALK: 5,
        LEFT_WALK: 6,
        RIGHT_WALK: 7,
    };

    function walk(state) {
        if(state === states.DOWN_WALK){
            setY((prev) => (prev + stepSize))
        }
        if(state === states.UP_WALK){
            setY((prev) => (prev - stepSize))
        }
        if(state === states.LEFT_WALK){
            setX((prev) => (prev - stepSize))
        }
        if(state === states.RIGHT_WALK){
            setX((prev) => (prev + stepSize))
        }
    };

    return {walk, positionX, positionY}
}


/*
const Movement = props => {
    const state = props;
    
    let positionX = 0;
    let positionY = 0;
    
    switch(state){
        case 4:
            positionX = 0;
            positionY = 15;
            break;
        case 5:
            positionX = 0;
            positionY = -15;
            break;
        case 6:
            positionX = -15;
            positionY = 0;
            break;
        case 7:
            positionX = 15;
            positionY = 0;
            break;    
        default:
            positionX = 0;
            positionY = 0;
            break;
    }

    let movement = {x: positionX, y: positionY};
    return movement;
}

export default Movement
*/