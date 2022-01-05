import React, { useEffect, useRef } from "react";
import "./options.css";

const Options = (props) => {
    const button1Ref = useRef();
    const button2Ref = useRef();
    const button3Ref = useRef();
    const button4Ref = useRef();

    useEffect(() => {
        button1Ref.current.addEventListener("mouseover", () => {
            props.selected(props.btn1);
        });
        button2Ref.current.addEventListener("mouseover", () => {
            props.selected(props.btn2);
        });
        button3Ref.current.addEventListener("mouseover", () => {
            props.selected(props.btn3);
        });
        button4Ref.current.addEventListener("mouseover", () => {
            props.selected(props.btn4);
        });
    });

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
                <span
                    role={"button"}
                    ref={button2Ref}
                    className="option-text"
                    onClick={props.handleClick2}
                >
                    {props.btn2}
                </span>
            </div>
            <div className="texts">
                <span
                    role={"button"}
                    ref={button3Ref}
                    className="option-text"
                    onClick={props.handleClick3}
                >
                    {props.btn3}
                </span>
                <span
                    role={"button"}
                    ref={button4Ref}
                    className="option-text"
                    onClick={props.handleClick4}
                >
                    {props.btn4}
                </span>
            </div>
        </div>
    );
};

export default Options;
