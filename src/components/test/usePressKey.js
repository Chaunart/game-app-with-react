import { useEffect } from 'react';

export function usePressKey(fn) {
    useEffect(() =>  {
        window.addEventListener('keydown', fn)
        return () => window.removeEventListener('keydown', fn)
    }, [fn]);
}

export function useReleaseKey(fn) {
    useEffect(() =>  {
        window.addEventListener('keyup', fn)
        return () => window.removeEventListener('keyup', fn)
    }, [fn]);
}

export function useClick(fn) {
    useEffect(() =>  {
        window.addEventListener('click', fn)
        return () => window.removeEventListener('click', fn)
    }, [fn]);
}



/*
ist überfordert wenn mehrer tasten 
gleichzeitig gedrückt und unterschiedlich 
losgelassen werden
*/


//https://www.youtube.com/watch?v=DqpPgK13oEM&t=0s