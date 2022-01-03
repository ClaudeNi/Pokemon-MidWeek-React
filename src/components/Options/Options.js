import React, { useRef } from "react";
import "./options.css";

const Options = (props) => {
    const button1Ref = useRef();
    const button2Ref = useRef();
    const button3Ref = useRef();
    const button4Ref = useRef();
    return (
        <div className="text-container">
            <div className="texts">
                <span
                    role={"button"}
                    ref={button1Ref}
                    className="option-text"
                    onClick={props.handleClick1}
                >
                    {props.btn1}
                </span>
                <span role={"button"} ref={button2Ref} className="option-text">
                    {props.btn2}
                </span>
            </div>
            <div className="texts">
                <span role={"button"} ref={button3Ref} className="option-text">
                    {props.btn3}
                </span>
                <span role={"button"} ref={button4Ref} className="option-text">
                    {props.btn4}
                </span>
            </div>
        </div>
    );
};

export default Options;
