import React from "react";
import "./components.css";

const Operation = (props) => {
	const { display, operation, total } = props;
	return (
		<div className="operation">
			<div>Memory: {total} </div>
			<div>Operation: {operation} </div>
		</div>
	);
};

const TotalDisplay = (props) => {
	const { display, operation, initialTotal, total, totalReveal } = props;

	return (
		<div>
			{totalReveal === true ? (
				<div className="grand-total-display">{total} </div>
			) : (
				<div className="initial-total-display">{display}</div>
			)}
			<Operation
				display={display}
				operation={operation}
				initialTotal={initialTotal}
				total={total}
				totalReveal={totalReveal}
			/>
		</div>
	);
};

export default TotalDisplay;
