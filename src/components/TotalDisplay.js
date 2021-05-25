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
	const { display, total, totalReveal } = props;

	return (
		<div>
			{totalReveal === true ? (
				<div className="grand-total-display">{total} </div>
			) : (
				<div className="initial-total-display">{display}</div>
			)}
			<Operation />
		</div>
	);
};

export default TotalDisplay;
