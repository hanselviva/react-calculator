import React from "react";
import "./components.css";

const Operation = (props) => {
	return (
		<div className="operation">
			<div>Memory:</div>
			{/* <div>Operation:</div> */}
		</div>
	);
};

const TotalDisplay = (props) => {
	const { value } = props;

	return (
		<div>
			<div className="total-display"> {value} </div>
			<Operation />
		</div>
	);
};

export default TotalDisplay;
