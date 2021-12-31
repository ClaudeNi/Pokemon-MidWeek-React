import React, { useRef } from "react";
import { useParams } from "react-router-dom";
// import mapsData from "../Map/mapsData";
import "./battleboard.css";

const BattleBoard = () => {
    const { mapName } = useParams();
    const boardRef = useRef();

    return (
        <div ref={boardRef} className="battleboard">
            <div className={`${mapName} pixel-art`}></div>
            <div className="text-box pixel-art">
                <div className="texts">
                    <span className="option-text">Fight</span>
                    <span className="option-text">Bag</span>
                </div>
                <div className="texts">
                    <span className="option-text">Pokemon</span>
                    <span className="option-text">Run</span>
                </div>
            </div>
        </div>
    );
};

export default BattleBoard;
