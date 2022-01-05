import React from "react";
import Options from "../Options/Options";
import "./moveOptions.css";

const MoveOptions = (props) => {
    return (
        <div className="fight-container">
            <Options
                btn1={props.moves[0]}
                btn2={props.moves[1]}
                btn3={props.moves[2]}
                btn4={props.moves[3]}
            />
            <div className="pp">
                <span>{`PP ${props.selectedMove.currentPP}/${props.selectedMove.pp}`}</span>
                <span>{`Type/${props.selectedMove.type}`}</span>
            </div>
        </div>
    );
};

export default MoveOptions;
