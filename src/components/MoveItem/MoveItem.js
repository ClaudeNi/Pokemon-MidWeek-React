import React, { useRef } from "react";
import "./moveItem.css";

const MoveItem = (props) => {
    const moveRef = useRef();

    const handleClick = () => {
        moveRef.current.classList.toggle("move-selected");
    };
    return (
        <div
            role={"button"}
            ref={moveRef}
            className="move"
            onClick={handleClick}
        >
            {props.move.move.name.toUpperCase()}
        </div>
    );
};

export default MoveItem;
