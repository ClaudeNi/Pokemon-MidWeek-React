import React from "react";
import { Link } from "react-router-dom";
import Btn from "../../components/Btn/Btn";
import "./titleScreen.css";

const TitleScreen = () => {
	return (
		<div className="title-container">
			<div className="intro-text-container">
				<span className="intro-text">Welcome to my game!</span>
				<span className="intro-text">
					Enjoy a custom battle where you pick your own Pokemon and
					battle moves to fight an enemy AI!
				</span>
			</div>
			<div className="title-bottom-container">
				<Link to="/TeamBuilder">
					<Btn text="Custom Battle Mode" className="bigger-text" />
				</Link>
			</div>
		</div>
	);
};

export default TitleScreen;
