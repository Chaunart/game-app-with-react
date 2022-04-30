import {useEffect} from 'react';


export default function useMapping (drawDungeon,
                                      canvasRef,
                                      ) {

    useEffect(() => {

        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        drawDungeon(context);
    }, [])

}