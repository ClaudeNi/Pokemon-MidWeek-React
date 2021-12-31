import React, { useEffect, useRef } from "react";
import "./player.css";

const Player = (props) => {
    const playerRef = useRef();

    useEffect(() => {
        window.addEventListener("keydown", (e) => {
            // console.log(e.key);
        });
    });

    return (
        <div
            ref={playerRef}
            className="player-container"
            facing="down"
            walking="true"
        >
            <div className={`player pixel-art`}></div>
        </div>
    );
};

export default Player;
