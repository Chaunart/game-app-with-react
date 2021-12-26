import React from 'react';
import Sprite from './Sprite.js';
import HeroSprite from './hero.png';
import usePressKey from '../hooks/usePressKey.js';
import useWalk from '../hooks/useWalk.js';

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



/*import HeroSprite from './enemy.png'

export const Enemy = ({x, y}) => {
    return <Sprite image={EnemySprite} data={{x:x, y:y, h: blah, w: blah}} />
}
*/