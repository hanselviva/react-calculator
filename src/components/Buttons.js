import React from "react";
import "./components.css";

const Buttons = () => {
	return (
		<div className="buttons-wrapper">
			<table>
				<tr className="memory-functions">
					<th>M+</th>
					<th>MR</th>
					<th>MC</th>
					<th>CE</th>
				</tr>
				<tr>
					<th>7</th>
					<th>8</th>
					<th>9</th>
					<th className="operator">X</th>
				</tr>
				<tr>
					<th>4</th>
					<th>5</th>
					<th>6</th>
					<th className="operator">-</th>
				</tr>
				<tr>
					<th>1</th>
					<th>2</th>
					<th>3</th>
					<th rowspan="2" className="operator">
						+
					</th>
				</tr>
				<tr>
					<th>0</th>
					<th className="operator">/</th>
					<th className="operator">=</th>
				</tr>
			</table>
		</div>
	);
};

export default Buttons;
