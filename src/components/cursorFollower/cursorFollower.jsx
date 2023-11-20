import React, { useEffect, useState } from "react";
import "./cursorFollower.css";

const CursorFollower = () => {
    const [mousePosX,setMousePosX] = useState(100); //Mouse starting position glitched if 0 
    const [mousePosY,setMousePosY] = useState(100);
    const [followerPosX,setFollowerPosX] = useState(0);
    const [followerPosY,setFollowerPosY] = useState(0);
    const [frame,setFrame] = useState(0);
    const [frameSrc,setFrameSrc] = useState(require("../../assets/follower/kirb/frame-0.jpg"));
    const [step,setStep] = useState(0);
    const [moved,setMoved] = useState(true);
    const [mirrored,setMirrored] = useState(1);

    const numberOfFrames = 9; //Number of frames in the follower animation
    const animSpeed = 5; //Animation speed
    const cursorDistance = 50; //Distance between cursor and follower

    document.onmousemove = (e) => {
        setMousePosX(e.clientX);
        setMousePosY(e.clientY);
    };

    setTimeout(() => {
        if (Math.abs(mousePosX - followerPosX) > cursorDistance) {
            setFollowerPosX(followerPosX + ((mousePosX - followerPosX) / 100));
            if (mousePosX - followerPosX > 0) {
                setMirrored(1);
            } else {
                setMirrored(-1);
            }
            setMoved(true);
        }
        if (Math.abs(mousePosY - followerPosY) > cursorDistance) {
            setFollowerPosY(followerPosY + ((mousePosY - followerPosY) / 100));
            setMoved(true);
        }
        if (moved === true) { 
            if (step === animSpeed) {
                if (frame < numberOfFrames) {
                    setFrame(frame + 1);
                    setStep(0);
                    setMoved(false);
                } else {
                    setFrame(0);
                    setStep(0);
                    setMoved(false);
                }
            } else {
                setStep(step + 1);
                setMoved(false);
            }
        }
        setFrameSrc(require(`../../assets/follower/kirb/frame-${frame}.jpg`));
    }, 10);

    return (
        <div className="cursor-follower" style={{left: `${followerPosX}px`, top: `${followerPosY}px`, backgroundImage: `url(${frameSrc})`, transform: `scaleX(${mirrored})`}}/>
    );
}

export default CursorFollower;