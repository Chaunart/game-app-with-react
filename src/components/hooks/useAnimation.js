import React, { useRef, useEffect } from 'react'

const Animate = props => {
 
  const { draw, spriteSize, playerstate, spriteAnimation} = props;
  const canvasRef = useRef(null);
  
  useEffect(() => {

    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

    let animationFrameId = 0
    let gameFrame = 0
    let staggerFrame = 7

  
    const render = () => {  

      let position = Math.floor(gameFrame/staggerFrame) % spriteAnimation[playerstate].loc.length;
      let frameCount = spriteSize*position;
      let animationline = spriteAnimation[playerstate].loc[position].y;
      draw(context, frameCount, animationline, 0, 0)

      gameFrame++;
      animationFrameId = window.requestAnimationFrame(render)
    }
    render()
    
    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [draw, playerstate, spriteAnimation, spriteSize])
  
  return <canvas style = {{border: '5px solid black',
                          position: 'absolute', 
                          top: '50%', 
                          left:'50%', 
                          transform: 'translate(-50%, -50%)',
                          width: '600px',
                          height: '600px',
                          background: 'blue',}} 
                  ref={canvasRef} {...props}/>
}

export default Animate
/*
const Draw = props => {
  
  const { draw, ...rest } = props
  const canvasRef = useRef(null)
  
  useEffect(() => {
    
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    let frameCount = 0
    let animationFrameId
    
    const render = () => {
      frameCount++
      draw(context, frameCount)
      animationFrameId = window.requestAnimationFrame(render)
    }
    render()
    
    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [draw])
  
  return <canvas ref={canvasRef} {...rest}/>
}

export default Draw
*/