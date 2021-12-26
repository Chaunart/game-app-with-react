import {useState} from 'react';

export default function useWalk(maxSteps) {
    const [position, setPosition] = useState({x: 0, y: 0});
    const [dir, setDir] = useState(0);
    const[step, setStep] = useState(0);
    const directions = { down: 0, up: 1, left: 2, right: 3, };

    const stepSize = 6;

    const modifier = {
        down: {x: 0, y: stepSize},
        up: {x: 0, y: -stepSize},
        left: {x: -stepSize, y: 0},
        right: {x: stepSize, y: 0},
    };

    function walk(dir) {
        setDir((prev) => {
            if(directions[dir] === prev) move(dir)
            return directions[dir];
        });
        setStep(prev => prev < maxSteps ? prev + 1 : 1);
    };

    function move(dir) {
        setPosition((prev) => ({
            x: prev.x + modifier[dir].x,
            y: prev.y + modifier[dir].y,
        }));
    };

    return {walk, dir, step, position}
}

