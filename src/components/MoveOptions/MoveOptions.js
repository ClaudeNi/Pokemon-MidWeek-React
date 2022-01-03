import React from "react";
import Options from "../Options/Options";
import "./moveOptions.css";

const MoveOptions = (props) => {
    return (
        <div className="fight-container">
            <Options btn1="Fight" btn2="Bag" btn3="Pokemon" btn4="Run" />
            <div className="pp">
                <span>{`PP ${props.selectedMove.currentPP}/${props.selectedMove.pp}`}</span>
                <span>{`Type/${props.selectedMove.type}`}</span>
            </div>
        </div>
    );
};

export default MoveOptions;
