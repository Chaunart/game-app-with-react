import {useEffect} from 'react';


const frames = 4;


export default function useAnimation (draw, 
                                      spriteSize,
                                      direction, 
                                      canvasRef) {

    useEffect(() => {
    
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')

        let gameFrame = 0
        let animationFrameId = 0
        let staggerFrame = 7
        
        //Our draw came here
        const render = () => {
        let position = Math.floor(gameFrame/staggerFrame) % frames;
        let frameCount = spriteSize*position;
        draw(context, frameCount, direction*spriteSize, 0, 0)
        
        gameFrame++;
        animationFrameId = window.requestAnimationFrame(render)
        }
        
        render()
        
        return () => {
          window.cancelAnimationFrame(animationFrameId)
        }
    }, [canvasRef, draw, spriteSize, direction])
}

/*
export default function useAnimation (draw, 
                                      spriteSize, 
                                      playerstate, 
                                      spriteAnimation, 
                                      canvasRef) {

    useEffect(() => {
    
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        let frameCount = 0
        let animationFrameId
        
        //Our draw came here
        const render = () => {
          draw(context, frameCount)
          animationFrameId = window.requestAnimationFrame(render)
        }
        render()
        
        return () => {
          window.cancelAnimationFrame(animationFrameId)
        }
      }, [canvasRef, draw])
}

*/