import React from "react";
import { Link } from "react-router-dom";
import "./homepage.css";

const HomePage = () => {
    return (
        <div className="homepage">
            Homepage
            <Link to="/game"></Link>
        </div>
    );
};

export default HomePage;
