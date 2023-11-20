import react, {useRef, useEffect, useCallback} from 'react';
import './canvasExperiment.css';

const CanvasExperiment = () => {
    const canvasRef = useRef(null);
    
    const update_char_sprite_position = (src, check_up, check_left, check_down, check_right, posX, posY, speed, canvas) => {
        if (check_up === true){ //haut
            if (check_left === true){ //haut gauche
                
                if (posX - speed >= 0) posX -= speed;
                if (posY - speed >= 0) posY -= speed;
            }
            else if (check_right === true){ //haut droite
                if (posX + speed <= canvas.width - src.width) posX += speed;
                if (posY - speed >= 0) posY -= speed;
            }
            else if (posY - speed >= 0) posY -= speed;
        }
        else if (check_down === true){ //bas
            if (check_left === true){ //bas gauche
                if (posX - speed >= 0) posX -= speed;
                if (posY +speed <= canvas.height - src.height) posY += speed;
            }
            else if (check_right === true){ //bas droite
                if (posX + speed <= canvas.width - src.width) posX += speed;
                if (posY +speed <= canvas.height - src.height) posY += speed;
            }
            else if (posY +speed <= canvas.height - src.height) posY += speed; 
        } 
        else if (check_left === true){ //gauche
            if (check_up === true){ //haut gauche
                if (posY - speed >= 0) posY -= speed;
                if (posX - speed >= 0) posX -= speed;
            }
            else if (check_down === true){ // bas gauche
                if (posY +speed <= canvas.height - src.height) posY += speed
                if (posX - speed >= 0) posX -= speed;
            }
            else if (posX - speed >= 0) posX -= speed;
        } 
        else if (check_right === true){ //droite
            if (check_up === true){ // droite haut
                if (posY - speed >= 0) posY -= speed;
                if (posX + speed <= canvas.width - src.width) posX += speed;
            }
            else if (check_down === true){ // droite bas
                if (posY +speed <= canvas.height - src.height) posY += speed;
                if (posX + speed <= canvas.width - src.width) posX += speed;
            }
            else if (posX + speed <= canvas.width - src.width) posX += speed;       
        }
    }

    const update_background_position = (scrollVallue, canvas, check_left, backgroundSpeed, backgroundPosX, check_right, ctx, background, backgroundPosY) => {
        if(scrollVallue >= canvas.width || scrollVallue <= -canvas.width) {
            scrollVallue = 0;
        }
        if (check_left === true) {
            scrollVallue += backgroundSpeed;
            backgroundPosX += backgroundSpeed;
        }
        else if (check_right === true) {
            scrollVallue -= backgroundSpeed;
            backgroundPosX -= backgroundSpeed;
        }
        ctx.drawImage(background, scrollVallue, backgroundPosY, canvas.width, canvas.height);
        ctx.drawImage(background, scrollVallue - canvas.width, backgroundPosY, canvas.width, canvas.height);
        ctx.drawImage(background, scrollVallue + canvas.width, backgroundPosY, canvas.width, canvas.height);
    } 

    const play = useCallback((ctx, canvas, keyDown, scrollVallue, check_left, backgroundSpeed, backgroundPosX, check_right, background, backgroundPosY, frame, factor, charFrame, walkingFrames, posX, posY, check_up, check_down, speed) => {     
        const loadCharImage = (frame, walkingFrames, ctx, posX, posY, check_up, check_left, check_down, check_right, speed, canvas) => {
            let char = walkingFrames[frame - 1];
            update_char_sprite_position(char, check_up, check_left, check_down, check_right, posX, posY, speed, canvas);
            let aspectRatio = char.width / char.height;
            let height = 100;
            let width = height * aspectRatio;
            ctx.drawImage(char, posX, posY, width, height);
        }
        
        const animateChar = (frame, factor, charFrame, walkingFrames, ctx, posX, posY, check_up, check_left, check_down, check_right, speed, canvas) => {
            frame = (frame + 1) % (9 * factor);
            charFrame = Math.floor(frame / factor) + 1;
            loadCharImage(frame, walkingFrames, ctx, posX, posY, check_up, check_left, check_down, check_right, speed, canvas);
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        update_background_position(scrollVallue, canvas, check_left, backgroundSpeed, backgroundPosX, check_right, ctx, background, backgroundPosY);
        if (keyDown === true) {
            animateChar(frame, factor, charFrame, walkingFrames, ctx, posX, posY, check_up, check_left, check_down, check_right, speed, canvas);
        }
        else {
            loadCharImage(1, walkingFrames, ctx, posX, posY, check_up, check_left, check_down, check_right, speed, canvas);
        }
        requestAnimationFrame(play(ctx, canvas, keyDown, scrollVallue, check_left, backgroundSpeed, backgroundPosX, check_right, background, backgroundPosY, frame, factor, charFrame, walkingFrames, posX, posY, check_up, check_down, speed));
    }, [])

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        canvas.width = window.innerWidth - 200;
        canvas.height = 600;

        let posX = 50; //position de départ du personnage
        let posY = canvas.height - 200; 
        let speed = 3; //vitesse de déplacement du personnage

        let walkingFrames = []; //tableau des frames du personnage

        const loadCharWalking = () => {
            for(let i = 1; i <= 9; i++) {
                let char = new Image();
                char.src = `../../../assets/follower/kirb/frame-${i}.jpg`;
                walkingFrames.push(char);
            }
        }

        loadCharWalking();

        let frame = 0; //frame du sprite
        let charFrame; //frame du personnage
        let factor = 6; //vitesse de l'animation

        let backgroundPosX = 0; //position de départ du background
        let backgroundPosY = 0;
        let backgroundSpeed = 6; //vitesse de déplacement du background
        let scrollVallue = 0; //valeur de déplacement du background

        let background = new Image();
        background.src = `../../../assets/background/canvas-bg.png`;

        let keyDown = false;
        let check_up = false;
        let check_down = false;
        let check_left = false;
        let check_right = false;

        const keyDownHandler = (e) => {
            keyDown = true;
            switch (e.keyCode) {
                case 38:
                    check_up = true;
                    break;
                case 40:
                    check_down = true;
                    break;
                case 37 :
                    check_left = true;
                    break;
                case 39:
                    check_right = true;
                    break;
                default:
                    break;
            }
        }

        const keyUpHandler = (e) => {
            keyDown = false;
            switch (e.keyCode) {
                case 38:
                    check_up = false;
                    break;
                case 40:
                    check_down = false;
                    break;
                case 37 :
                    check_left = false;
                    break;
                case 39:
                    check_right = false;
                    break;
                default:
                    break;
            }
        }

        document.onkeydown = keyDownHandler;
        document.onkeyup = keyUpHandler;

        //play(ctx, canvas, keyDown, scrollVallue, check_left, backgroundSpeed, backgroundPosX, check_right, background, backgroundPosY, frame, factor, charFrame, walkingFrames, posX, posY, check_up, check_down, speed)
    }, [play]);

    return (
        <canvas ref={canvasRef} id="moving-canvas"/>
    );
}

export default CanvasExperiment;