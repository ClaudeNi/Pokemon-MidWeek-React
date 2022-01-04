import React from "react";
import { Link } from "react-router-dom";
import Btn from "../../components/Btn/Btn";
import "./titleScreen.css";

const TitleScreen = () => {
    return (
        <div>
            Pokemon
            <Btn text="Normal Mode" />
            <Link to="/TeamBuilder">
                <Btn text="Custom Battle Mode" />
            </Link>
        </div>
    );
};

export default TitleScreen;
