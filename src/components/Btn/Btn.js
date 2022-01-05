import React from "react";
import "./btn.css";

const Btn = (props) => {
    return (
        <div
            role={"button"}
            className={`btn ${props.className}`}
            onClick={props.clickHandle}
        >
            {props.text}
        </div>
    );
};

export default Btn;
