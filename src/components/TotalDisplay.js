import React from "react";
import "./components.css";

const Operation = (props) => {
	return (
		<div className="operation">
			<div>Memory:</div>
		</div>
	);
};

const TotalDisplay = (props) => {
	const { display } = props;

	return (
		<div>
			<div className="total-display">{display}</div>
			<Operation />
		</div>
	);
};

export default TotalDisplay;
