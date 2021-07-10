import React, { useState, useEffect } from "react";

//create your first component
export function Home() {
	const [inputValue, setInputValue] = useState("");
	const [userName, setUserName] = useState("");
	const [showAlert, doShowAlert] = useState(false);

	useEffect(() => {}, []);

	const updateInfo = e => {
		let value = e.target.value;
		setInputValue(e.target.value);
		if (value === "") {
			doShowAlert(true);
			setUserName("");
		} else {
			doShowAlert(false);
		}
	};

	const validateData = () => {
		console.log("validating data... ");
		const usersInput = inputValue.trim();
		if (usersInput === "") {
			console.log("invalid users input");
			setUserName("");
			doShowAlert(true);
		} else {
			setUserName(inputValue);
			doShowAlert(false);
		}
	};

	return (
		<div className="text-center mt-5">
			<input type="text" value={inputValue} onChange={updateInfo} />{" "}
			&nbsp;
			<button className="btn btn-primary" onClick={validateData}>
				Say hello
			</button>
			<hr width="100%" />
			{userName.length > 0 && <h1>Hello {userName}</h1>}
			{showAlert && (
				<div className="alert alert-danger" role="alert">
					Invalid input, please fix!
				</div>
			)}
		</div>
	);
}
