import React, { useEffect, useRef, useState } from "react";
import Btn from "../Btn/Btn";
import usersApi from "../../api/usersApi";
import "./login.css";
import { useHistory } from "react-router-dom";

const Login = () => {
	const [users, setUsers] = useState([]);
	const [isLogging, setIsLogging] = useState(true);
	const [emailText, setEmailText] = useState("");
	const [passText, setPassText] = useState("");
	const [btnText, setBtnText] = useState("Login");
	const [bottomText, setBottomText] = useState("Don't have an account? ");
	const [bottomBtn, setBottomBtn] = useState("Register");

	const emailRef = useRef();
	const passRef = useRef();

	const history = useHistory();

	useEffect(() => {
		fetchUsers();
		// eslint-disable-next-line
	}, []);

	const fetchUsers = async () => {
		try {
			const fetchedUsers = await usersApi.get("pokemonUsers");
			setUsers([...fetchedUsers.data]);
		} catch (e) {
			console.log(e);
		}
	};

	const addUser = async (user) => {
		try {
			await usersApi.post("pokemonUsers", user);
		} catch (e) {
			console.log(e);
		}
	};

	const handleSwitch = () => {
		if (isLogging === true) {
			setBtnText("Register");
			setBottomText("Already have an account? ");
			setBottomBtn("Login");
			setIsLogging(false);
		} else {
			setBtnText("Login");
			setBottomText("Don't have an account? ");
			setBottomBtn("Register");
			setIsLogging(true);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (
			emailRef.current.value.length > 0 &&
			passRef.current.value.length > 0
		) {
			if (isLogging) {
				const user = users.filter(
					(user) => user.login.email === emailRef.current.value
				);
				if (user[0] === undefined) {
					console.log("no such user exists");
				} else if (user[0].login.password === passRef.current.value) {
					console.log("logged in");
					history.push("/title");
				} else {
					console.log("wrong password");
				}
			} else {
				const loginData = {
					login: {
						email: emailRef.current.value,
						password: passRef.current.value,
					},
				};
				addUser(loginData);
				handleSwitch();
			}
		}
	};

	const handleGuest = () => {
		history.push("/title");
	};

	return (
		<div className="login-container">
			<form className="login">
				<label>Email:</label>
				<input
					ref={emailRef}
					type={"email"}
					id="email"
					placeholder="email"
					value={emailText}
					onChange={(e) => setEmailText(e.target.value)}
					required
				></input>
				<label>Password:</label>
				<input
					ref={passRef}
					type={"password"}
					id="password"
					placeholder="password"
					value={passText}
					onChange={(e) => setPassText(e.target.value)}
					required
				></input>
				<input
					type="submit"
					id="Submit"
					value={btnText}
					className="btn"
					onClick={handleSubmit}
				></input>
			</form>

			<div className="bottom-container">
				<span className="bottom-text">{bottomText}</span>
				<Btn clickHandle={handleSwitch} text={bottomBtn} />
			</div>
			<div className="bottom-container">
				<span className="bottom-text">Or try it out as a guest!</span>
				<Btn clickHandle={handleGuest} text="Guest" />
			</div>
		</div>
	);
};

export default Login;
