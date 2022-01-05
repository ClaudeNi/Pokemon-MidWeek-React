import React from "react";
import Login from "../../components/Login/Login";
import "./homepage.css";
import logo from "../../assets/imgs/ui/pokemon_logo.png";

const HomePage = () => {
    return (
        <div className="homepage pixel">
            <div className="top-container">
                <img src={logo} alt="logo" />
                <Login />
            </div>
            <div className="credit">
                <a
                    href="https://en.wikipedia.org/wiki/Pok%C3%A9mon"
                    target="_blank"
                    rel="noreferrer"
                >
                    Pokemon
                </a>{" "}
                is a property owned by Nintendo, Creatures and Game Freak.
            </div>
        </div>
    );
};

export default HomePage;
