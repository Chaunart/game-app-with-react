import React from 'react';

export default function Sprite({ image, data, position }){
    const {step, dir, w, h} = data;
    return (
        <div className='Sprite'
            style={{
                position: "absolute",
                top:position.y,
                left:position.x,
                backgroundImage: `url(${image})`,
                backgroundPosition: `-${step*w}px -${dir*h}px`,
                height: `${h}px`,
                width: `${w}px`,
            }}
        />       
    )
}