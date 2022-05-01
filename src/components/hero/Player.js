import HeroSprite from './hero.png';
import State from './State.js';

const playerImage = new Image();
playerImage.src = HeroSprite;

export const spriteSize = 85;
const scaleSize = spriteSize*1;

const frames = 4;  
const staggerFrame = 10;

//seperater counter für gameFrame weil die lauf animation sonst nicht funktioniert
let thisGameFrame = 0



export const Player = () => {
        
    const {currentState, positionX, positionY, changeState, currentAnimationState} = State();

    const drawHero = (context, gameFrame,) => {

        let frameCount = 0;

        switch(currentAnimationState){
            case 1: //walk
                frameCount = Math.floor(thisGameFrame/staggerFrame) % frames;
                thisGameFrame++;
                break;
            case 2: //attack
                frameCount = Math.floor(gameFrame/staggerFrame) % frames;
                if (gameFrame === 39) {
                    switch (currentState){
                        case 8:
                            changeState(0);
                            break;
                        case 9:
                            changeState(1);
                            break;
                        case 10:
                            changeState(2);
                            break;
                        case 11:
                            changeState(3);
                            break;
                         default:
                            break;
                    }
                }; 
                break;
            default: // idle (case 0)
                frameCount = Math.floor(gameFrame/staggerFrame) % frames;
                break;
        }

        context.drawImage (playerImage, 
            frameCount*spriteSize, currentState*spriteSize, 
            spriteSize, spriteSize, 
            positionX, positionY, 
            scaleSize, scaleSize
        )
    }

    return  {drawHero, positionX, positionY}
    
}
export default Player;

