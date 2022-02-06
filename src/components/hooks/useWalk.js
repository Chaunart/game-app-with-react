import {useState} from 'react';
//import { pathList } from '../sprites/dungeon/Dungeon.js';



const spriteSize = 85;
const spriteAnimation = [];
const animationStates = [
    { name: 'down_walk', frames: 4, },
    { name: 'up_walk', frames: 4, },
    { name: 'left_walk', frames: 4, },
    { name: 'right_walk', frames: 4, },
  ];

  animationStates.forEach((state, index) => {
    let frames = {loc: [],}
    for (let j = 0; j < state.frames; j++){
      frames.loc.push({ x:j*spriteSize, y:(index+4)*spriteSize });
    }
    spriteAnimation[state.name] = frames;
  });


export default function useWalk() {

    const [position, setPosition] = useState({x:0, y:0});
    const [dir, setDir] = useState(0);
    const directions = { down: 0, up: 1, left: 2, right: 3, };

    let playerstate =  animationStates[dir].name;
    const stepSize = 5;

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
    };

    function move(dir) {
        setPosition((prev) => ({
            x: prev.x + modifier[dir].x,
            y: prev.y + modifier[dir].y,
        }));
    };

    return {playerstate, walk, position, spriteSize, spriteAnimation}
}





/*
function generateStart(pathList){
    let position = Math.floor(Math.random() * (pathList.length));
    let start = pathList[position];
    return start;
}


export default function useWalk(maxSteps) {

    const start = generateStart(pathList);

    const [position, setPosition] = useState({x: ((start.x*64)-(start.x*10)), y: ((start.y*64)-(start.y*10))});
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

*/