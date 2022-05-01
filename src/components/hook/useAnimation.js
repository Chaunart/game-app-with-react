import {useEffect} from 'react';



export default function useAnimation (drawHero, drawDungeon, drawCollisionExit, 
                                      drawCollisionPlayer, drawCollisionFloor,
                                      canvasRef,
                                      ) {


    useEffect(() => {

        const canvas = canvasRef.current
        const context = canvas.getContext('2d')

        let animationFrameId;
        let gameFrame = 0;

        const animate = () => {
            context.clearRect(0, 0, window.innerWidth, window.innerHeight)
            drawDungeon(context);
            drawHero(context, gameFrame);
            
            drawCollisionFloor(context);
            drawCollisionExit(context);
            drawCollisionPlayer(context, gameFrame);

            gameFrame++;
            
            animationFrameId = window.requestAnimationFrame(animate);

        };

        animate();

        return () => {
            window.cancelAnimationFrame(animationFrameId)
        }

    }, [drawHero, canvasRef,])


}