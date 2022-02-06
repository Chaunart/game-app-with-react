import React, { useRef, useState } from 'react';
import useAnimation from './useAnimation';
import HeroSprite from './hero.png';
import State from './State.js';
import {usePressKey, useReleaseKey, useClick} from './usePressKey';
//import InputHandler from './usePressKey';
//import Input from './usePressKey';

const gamewidth = 640;
const gameheight = 640;

const playerImage = new Image();
playerImage.src = HeroSprite;

const spriteSize = 85;

//const positionX = 0;
//const positionY = 0;


export const Player = () => {

    //const input = new InputHandler();
    
    //const input = Input();
    const currentState = State();

//    const [direction, setDirection] = useState(checkDirection(currentState));





    //const [currentState, setCurrentState] = useState(State);
    //const currentState = {name: 'down', frames: 4};

    //const [direction, setDirection] = useState(states.indexOf(currentState));

    //console.log(input.lastKey);

    /*
    usePressKey((e) => {
        const dir = e.key.replace('Arrow', 'press').toLowerCase();
        console.dir(dir);

        if (dir === 'pressdown') changeState(4); 
        else if (dir === 'pressup') changeState(5);
        else if (dir === 'pressleft') changeState(6);
        else if (dir === 'pressright') changeState(7);

        setDirection(checkDirection(currentState));
        
        e.preventDefault();
    });

    useReleaseKey((e) => {
        const dir = e.key.replace('Arrow', 'release').toLowerCase();
        console.dir(dir);
        if (dir === 'releasedown') changeState(0);
        else if (dir === 'releaseup') changeState(1);
        else if (dir === 'releaseleft') changeState(2);
        else if (dir === 'releaseright') changeState(3);

        setDirection(checkDirection(currentState));

        e.preventDefault();

    });

    useClick((e) => {
        const click = 'click';
        console.dir(click);
        if (checkState(0) || checkState(4)) changeState(8);
        else if (checkState(1) || checkState(5)) changeState(9);
        else if (checkState(2) || checkState(6)) changeState(10);
        else if (checkState(3) || checkState(7)) changeState(11);

        setDirection(checkDirection(currentState));

        e.preventDefault();
    });
*/

    const draw = (ctx, frameCount, currentState, x, y) => {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
    ctx.drawImage (playerImage, 
        frameCount, currentState, 
        spriteSize, spriteSize, 
        x, y, 
        spriteSize, spriteSize)
    }

    
    const canvasRef = useRef(null)

    useAnimation(draw, spriteSize, currentState, canvasRef);

    return  <canvas style = {{ 
                    border: '1px solid #000000',
                    backgroundColor: '#000000',}}
                    width = {gamewidth} 
                    height ={gameheight}
                    ref = {canvasRef} />
    
}
export default Player;

// https://www.w3schools.com/graphics/canvas_reference.asp


/*
const states = [
    { name: 'down_idle', frames: 1, },
    { name: 'up_idle', frames: 1, },
    { name: 'left_idle', frames: 1, },
    { name: 'rechts_idle', frames: 1,},
    { name: 'down_walk', frames: 4, },
    { name: 'up_walk', frames: 4, },
    { name: 'left_walk', frames: 4, },
    { name: 'right_walk', frames: 4, },
    { name: 'down_attack', frames: 4, },
    { name: 'up_attack', frames: 4, },
    { name: 'left_attack', frames: 4, },
    { name: 'right_attack', frames: 4, },
    ];
*/