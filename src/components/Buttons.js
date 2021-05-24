import React from "react";
import "./components.css";

const Buttons = () => {
	return (
		<div className="buttons-wrapper">
			<table>
				<tr>
					<th className="button">M+</th>
					<th className="button">MR</th>
					<th className="button">MC</th>
				</tr>
				<tr>
					<th className="button">1</th>
					<th className="button">2</th>
					<th className="button">3</th>
				</tr>
				<tr>
					<th className="button">4</th>
					<th className="button">5</th>
					<th className="button">6</th>
				</tr>
				<tr>
					<th className="button">7</th>
					<th className="button">8</th>
					<th className="button">0</th>
				</tr>
				<tr>
					<th className="button">0</th>
					<th className="button">-</th>
					<th className="button">+</th>
				</tr>
				<tr>
					<th className="button">CE</th>
					<th className="button">/</th>
					<th className="button">*</th>
				</tr>
			</table>
		</div>
	);
};

export default Buttons;
