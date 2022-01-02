import React from "react";
import { Link } from "react-router-dom";
import Login from "../../components/Login/Login";
import "./homepage.css";

const HomePage = () => {
    return (
        <div className="homepage">
            Homepage
            <Link to="/game/starterTown">To the game</Link>
            <Link to="/game/battle/route101">To the battle</Link>
            <Login />
        </div>
    );
};

export default HomePage;
