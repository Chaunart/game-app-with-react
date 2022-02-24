import { useState } from 'react';

export default function Movement() {

    const [positionX, setX] = useState(0);
    const [positionY, setY] = useState(0);

    const stepSize = 6;

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
