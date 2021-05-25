import "./components.css";

const Buttons = (props) => {
	const {
		handleInput,
		handleClearDisplay,
		handleOperation,
		handleInitialTotal,
		handleCalculate,
		handleDisplayTotal,
		handleClearTotal,
	} = props;
	return (
		<div className="buttons-wrapper">
			<table>
				<tbody>
					<tr className="memory-functions">
						<th>M+</th>
						<th>MR</th>
						<th>MC</th>
						<th>CE</th>
					</tr>
					<tr>
						<th
							id="7"
							onClick={(e) => {
								handleInput(e);
								handleInitialTotal();
							}}
						>
							7
						</th>
						<th id="8">8</th>
						<th id="9">9</th>
						<th
							className="operator"
							onClick={() => {
								handleOperation("*");
								handleClearDisplay();
							}}
						>
							x
						</th>
					</tr>
					<tr>
						<th id="4">4</th>
						<th id="5">5</th>
						<th id="6">6</th>
						<th className="operator" id="-">
							-
						</th>
					</tr>
					<tr>
						<th id="7">1</th>
						<th id="8">2</th>
						<th id="9">3</th>
						<th rowSpan="2" className="operator" id="+">
							+
						</th>
					</tr>
					<tr>
						<th id="0">0</th>
						<th className="operator" id="÷">
							÷
						</th>
						<th className="operator">=</th>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default Buttons;
