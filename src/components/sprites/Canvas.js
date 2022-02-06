import React from 'react'; 
import Animate from '../hooks/useAnimation';




const Canvas = props => {

  const { playerImage, spriteSize, playerstate, spriteAnimation, positionX, positionY} = props
  
  const draw = (ctx, frameCount, animationline, x, y) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.drawImage (playerImage, 
                  frameCount, animationline, 
                  spriteSize, spriteSize, 
                  positionX, positionY, 
                  spriteSize, spriteSize)
  }
  
  return <Animate 
              draw={draw} 
              spriteSize={spriteSize}
              playerstate={playerstate}
              spriteAnimation={spriteAnimation}
          />
}
export default Canvas





/*
const playerImage = new Image();
playerImage.src = Hero;
const spriteSize = 85;
let playerstate = 'left_attack';

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

const draw = (ctx, frameCount, animationline, x, y) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.drawImage (playerImage, frameCount ,animationline, 85, 85, x, y, 85, 85)
  }

const Canvas = props => {
  
    
  
  const canvasRef = useRef(null)
  
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
  }, [draw])
  
  return <canvas ref={canvasRef} {...props}/>
}

export default Canvas

*/


/*
const Canvas = () => {
  
  const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillStyle = '#000000'
    ctx.beginPath()
    ctx.arc(50, 100, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
    ctx.fill()
  }
  
  
  return <Draw draw={draw} />
}
export default Canvas

*/