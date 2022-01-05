import React, { useState } from "react";
import { Link } from "react-router-dom";
import Btn from "../../components/Btn/Btn";
import "./titleScreen.css";

const TitleScreen = () => {
    const [text, setText] = useState("");

    const handleClick = () => {
        setText("Work In Progress.");
    };
    return (
        <div className="title-container">
            <div className="intro-text-container">
                <span className="intro-text">Welcome to my game!</span>
                <span className="intro-text">
                    To get yourself started, pick between normal mode and custom
                    mode!
                </span>
                <span className="intro-text">
                    Unfortunately normal mode isnt done so for now please enjoy
                    custom mode where you pick a Pokemon and their moves and
                    fight an enemy!
                </span>
            </div>
            <div className="title-bottom-container">
                <div className="normal-container">
                    <Btn
                        text="Normal Mode"
                        clickHandle={handleClick}
                        className="bigger-text"
                    />
                    {text !== "" ? (
                        <span className="wip-text">{text}</span>
                    ) : null}
                </div>

                <Link to="/TeamBuilder">
                    <Btn text="Custom Battle Mode" className="bigger-text" />
                </Link>
            </div>
        </div>
    );
};

export default TitleScreen;
