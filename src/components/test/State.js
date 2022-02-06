import { useState } from 'react';
import {usePressKey, useReleaseKey, useClick} from './usePressKey';

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



export const State = () => {


    const [currentState, setCurrentState] = useState(states.DOWN_IDLE);

    usePressKey((e) => {
        const dir = e.key.replace('Arrow', 'press').toLowerCase();
        console.dir(dir);
        if (dir ==='pressdown') setCurrentState(states.DOWN_WALK);
        else if (dir ==='pressup') setCurrentState(states.UP_WALK);
        else if (dir ==='pressleft') setCurrentState(states.LEFT_WALK);
        else if (dir ==='pressright') setCurrentState(states.RIGHT_WALK);
        e.preventDefault();
    });

    useReleaseKey((e) => {
        const dir = e.key.replace('Arrow', 'release').toLowerCase();
        console.dir(dir);
        if (dir ==='releasedown') setCurrentState(states.DOWN_IDLE);
        else if (dir ==='releaseup') setCurrentState(states.UP_IDLE);
        else if (dir ==='releaseleft') setCurrentState(states.LEFT_IDLE);
        else if (dir ==='releaseright') setCurrentState(states.RIGHT_IDLE);
        e.preventDefault();
    });

    useClick((e) => {
        const click = 'click';
        console.dir(click);
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
        e.preventDefault();
    });

    return currentState;
}

export default State;



/*
export const State = props => {


    const [currentState, setCurrentState] = useState(states.DOWN_IDLE);


    switch(input){
        case 'PRESS down':
            setCurrentState(states.DOWN_WALK);
            break;
        case 'PRESS up':
            setCurrentState(states.UP_WALK);
            break;
        case 'PRESS left':
            setCurrentState(states.LEFT_WALK);
            break;    
        case 'PRESS right':
            setCurrentState(states.RIGHT_WALK);
            break;    
        case 'RELEASE down':
            setCurrentState(states.DOWN_IDLE);
            break;
        case 'RELEASE up':
            setCurrentState(states.UP_IDLE);
            break;
        case 'RELEASE left':
            setCurrentState(states.LEFT_IDLE);
            break;    
        case 'RELEASE right':
            setCurrentState(states.RIGHT_IDLE);
            break;
        case 'click':
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
            break;
        default:
            setCurrentState(states.DOWN_IDLE);
            break;
    }

    return currentState;
}

export default State;
*/

/*
class State {
    constructor(state){
        this.state = state;
    }
}

class LeftIdle extends State {
    constructor(player){
        super('LEFT_IDLE');
        this.player = player;
    }
    enter(){
        this.player.frameY = 2;
    }
    handleInput(input){
        if (input === 'PRESS right') this.player.setState(states.RIGHT_IDLE);
    }
}

class RightIdle extends State {
    constructor(player){
        super('RIGHT_IDLE');
        this.player = player;
    }
    enter(){
        this.player.frameY = 3;
    }
    handleInput(input){
        if (input === 'PRESS left') this.player.setState(states.LEFT_IDLE);
    }
}
*/


/*
const states = [
    { name: 'down_idle'},
    { name: 'up_idle'},
    { name: 'left_idle'},
    { name: 'rechts_idle'},
    { name: 'down_walk'},
    { name: 'up_walk'},
    { name: 'left_walk'},
    { name: 'right_walk'},
    { name: 'down_attack'},
    { name: 'up_attack'},
    { name: 'left_attack'},
    { name: 'right_attack'},
    ];

export const State = () => {
    
    const [currentState, setCurrentState] = useState(states[0]);

    function checkState(indexOfState){
        if(currentState === states[indexOfState]) return true;
    };

    function changeState(indexOfState){
        if(currentState !== states[indexOfState]) {
            setCurrentState(states[indexOfState])
        };
    };

    function checkDirection(state){
        return states.indexOf(state);
    }

    return {currentState, checkState, changeState, checkDirection};
}

export default State;

*/
