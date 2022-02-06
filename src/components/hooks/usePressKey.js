import { useEffect } from 'react';

export function usePressKey(fn) {
    useEffect(() =>  {
        window.addEventListener('keydown', fn)
        return () => window.removeEventListener('keydown', fn)
    }, [fn]);

}
