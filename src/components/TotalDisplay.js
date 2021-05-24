import React from "react";
import "./components.css";

const Operation = () => {
	return (
		<div className="operation">
			<div>Operation:</div>
			<div>Memory:</div>
		</div>
	);
};

const TotalDisplay = () => {
	return (
		<div>
			<div className="total-display"> 0 </div>
			<Operation />
		</div>
	);
};

export default TotalDisplay;
