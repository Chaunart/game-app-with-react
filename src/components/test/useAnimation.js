import {useEffect} from 'react';


const frames = 4;


export default function useAnimation (draw, 
                                      spriteSize,
                                      currentState, 
                                      canvasRef,
                                      positionX,
                                      positionY,
                                      currentAnimationState
                                      ) {
    
    useEffect(() => {
    
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')

        let gameFrame = 0
        let staggerFrame = 7
        
        //draw
        const render = () => {
          let spreadPosition = Math.floor(gameFrame/staggerFrame) % frames;
          let frameCount = spriteSize*spreadPosition;
          draw(context, frameCount, currentState*spriteSize, 
              positionX,
              positionY)
          
          gameFrame++;
          requestAnimationFrame(render);
          };
          
          render();

    }, [canvasRef, draw, spriteSize, currentState, positionX, positionY])
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