import { useState } from 'react';
import {usePressKey, useReleaseKey, useClick} from './usePressKey';
import Movement from './Movement';
import {newDungeon} from './Dungeon';
import Collision from './Collision';

const states = {
    DOWN_IDLE: 0,
    UP_IDLE: 1,
    LEFT_IDLE: 2,
    RIGHT_IDLE:3,
    DOWN_WALK: 4,
    UP_WALK: 5,
    LEFT_WALK: 6,
    RIGHT_WALK: 7,
    DOWN_ATTACK: 8,
    UP_ATTACK: 9,
    LEFT_ATTACK: 10,
    RIGHT_ATTACK: 11,
}

const animationStates = {IDLE: 0, WALK: 1, ATTACK:2};

export const State = () => {

    const [currentState, setCurrentState] = useState(states.DOWN_IDLE);
    const [currentAnimationState, setCurrentAnimationState] = useState(animationStates.IDLE);
    const {walk, positionX, positionY, changeStart} = Movement();
    const {exitVec, playerVec} = Collision(positionX, positionY);

    usePressKey((e) => {
        const dir = e.key.replace('Arrow', 'press').toLowerCase();
        //console.dir(dir);
        if (dir ==='pressdown'){ 
            if (currentState !== states.DOWN_WALK) setCurrentState(states.DOWN_WALK);
        }
        else if (dir ==='pressup'){ 
            if (currentState !== states.UP_WALK) setCurrentState(states.UP_WALK);
        }
        else if (dir ==='pressleft'){ 
            if (currentState !== states.LEFT_WALK) setCurrentState(states.LEFT_WALK);
        }
        else if (dir ==='pressright'){ 
            if (currentState !== states.RIGHT_WALK) setCurrentState(states.RIGHT_WALK);
        }
        walk(currentState);
        setCurrentAnimationState(animationStates.WALK);
        e.preventDefault();
    });

    useReleaseKey((e) => {
        const dir = e.key.replace('Arrow', 'release').toLowerCase();
        //console.dir(dir);
        if (dir ==='releasedown') setCurrentState(states.DOWN_IDLE);
        else if (dir ==='releaseup') setCurrentState(states.UP_IDLE);
        else if (dir ==='releaseleft') setCurrentState(states.LEFT_IDLE);
        else if (dir ==='releaseright') setCurrentState(states.RIGHT_IDLE);
        setCurrentAnimationState(animationStates.IDLE);
        e.preventDefault();
    });

    useClick((e) => {
        //const click = 'click';
        //console.dir(click);
        if (currentState === states.DOWN_WALK || currentState === states.DOWN_IDLE) {
            setCurrentState(states.DOWN_ATTACK)
        }
        else if (currentState === states.UP_WALK || currentState === states.UP_IDLE) {
            setCurrentState(states.UP_ATTACK)
        } else if (currentState === states.LEFT_WALK || currentState === states.LEFT_IDLE) {
            setCurrentState(states.LEFT_ATTACK)
        }else if (currentState === states.RIGHT_WALK || currentState === states.RIGHT_IDLE) {
            setCurrentState(states.RIGHT_ATTACK)
        }

        if (exitVec.x > playerVec.x + playerVec.width ||
            exitVec.x + exitVec.width < playerVec.x ||
            exitVec.y > playerVec.y + playerVec.height ||
            exitVec.y + exitVec.height < playerVec.y) {
                //'no exit'
        } else {
            //'exit'
            newDungeon();
            changeStart();
        }
        setCurrentAnimationState(animationStates.ATTACK);
        e.preventDefault();
    });

     function changeState(state) {
        setCurrentState(state);
        if (state >= 7){
            setCurrentAnimationState(0);
        }
        
    };

    return {currentState, positionX, positionY, changeState, currentAnimationState};
}

export default State;
