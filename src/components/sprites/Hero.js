import React from 'react';
//import Sprite from './Sprite.js';
import Canvas from './Canvas.js';
import HeroSprite from './hero.png';
import usePressKey from '../hooks/usePressKey.js';
import useWalk from '../hooks/useWalk.js';

const playerImage = new Image();
playerImage.src = HeroSprite;

/*
const spriteSize = 85;
const spriteAnimation = [];
const animationStates = [
    { name: 'down_idle', frames: 1, },
    { name: 'up_idle',frames: 1, },
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

  animationStates.forEach((state, index) => {
    let frames = {loc: [],}
    for (let j = 0; j < state.frames; j++){
      frames.loc.push({ x:j*spriteSize, y:index*spriteSize });
    }
    spriteAnimation[state.name] = frames;
  });

const playerstate= 'down_walk';
*/  

export const Hero = () => {

    const { playerstate, walk, position, spriteSize, spriteAnimation} = useWalk();

    usePressKey((e) => {
    walk(e.key.replace('Arrow', "").toLowerCase());
    e.preventDefault();
    })

    return <Canvas 
                playerImage={playerImage} 
                spriteSize={spriteSize}
                playerstate={playerstate}
                spriteAnimation={spriteAnimation}
                positionX={position.x}
                positionY={position.y}
            />
}



/*
export const Hero = () => {

    const { dir, step, walk, position } = useWalk(4);

    usePressKey((e) => {
    walk(e.key.replace('Arrow', "").toLowerCase());
    e.preventDefault();
    })

    return <Sprite 
                image={HeroSprite} 
                position={position} 
                data={{step:step, dir:dir, h: 85, w: 85}} 
            />
}

*/

/*import HeroSprite from './enemy.png'

export const Enemy = ({x, y}) => {
    return <Sprite image={EnemySprite} data={{x:x, y:y, h: blah, w: blah}} />
}
*/