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


/*

export default class InputHandler {
    constructor(){
        this.lastkey = '';
        window.addEventListener('keydown', (e) => {
           // console.log(e.key);
            switch(e.key){
                case 'ArrowLeft':
                    this.lastKey = 'PRESS left';
                    break;
                case 'ArrowRight':
                    this.lastKey = 'PRESS right';
                    break;
                case 'ArrowUp':
                    this.lastKey = 'PRESS up';
                    break;    
                case 'ArrowDown':
                    this.lastKey = 'PRESS down';
                    break;                 
                default:
                    this.lastKey = 'PRESS down';
                    break;
            }
            console.log(this.lastKey)
        });
        window.addEventListener('keyup', (e) => {
           // console.log(e.key);
           switch(e.key){
            case 'ArrowLeft':
                this.lastKey = 'RELEASE left';
                break;
            case 'ArrowRight':
                this.lastKey = 'RELEASE right';
                break;
            case 'ArrowUp':
                this.lastKey = 'RELEASE up';
                break;    
            case 'ArrowDown':
                this.lastKey = 'RELEASE down';
                break;                 
            default:
                this.lastKey = 'RELEASE down';
                break;
        }
            console.log(this.lastKey)
        });
        window.addEventListener('click', (e) => {
            console.log('click');
        });

    }
}

*/



/*
    constructor() {
        this.lastKey = '';
        window.addEventListener('keydown', function(e) {
            switch(e.key){
                case 'ArrowLeft':
                    this.lastKey = 'PRESS left';
            }
        });
        window.addEventListener('keyup', function(e) {
            switch(e.key){
                case 'ArrowLeft':
                    this.lastKey = 'RELEASE left';
            }
        });
    }

*/



/*
export default function usePressKey(fn) {
    useEffect(() =>  {
        window.addEventListener('keydown', fn)
        return () => window.removeEventListener('keydown', fn)
    }, [fn]);

}
*/



//https://www.youtube.com/watch?v=DqpPgK13oEM&t=0s