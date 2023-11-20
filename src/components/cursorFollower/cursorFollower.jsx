import React, { useEffect, useState } from "react";
import "./cursorFollower.css";

const CursorFollower = () => {
    const [mousePosX,setMousePosX] = useState(0);
    const [mousePosY,setMousePosY] = useState(0);
    const [followerPosX,setFollowerPosX] = useState(0);
    const [followerPosY,setFollowerPosY] = useState(0);

    window.addEventListener("mousemove", (e) => {
        setMousePosX(e.clientX);
        setMousePosY(e.clientY);
    });

    setTimeout(() => {
        if (Math.abs(mousePosX - followerPosX) > 50) {
            setFollowerPosX(followerPosX + ((mousePosX - followerPosX) / 100));
        }

        if (Math.abs(mousePosY - followerPosY) > 50) {
            setFollowerPosY(followerPosY + ((mousePosY - followerPosY) / 100));
        }
    }, 10);

    return (
        <div className="cursor-follower">
            <div className="cursor-follower-inner" style={{left: `${followerPosX}px`, top: `${followerPosY}px`}}></div>
        </div>
    );
}

export default CursorFollower;