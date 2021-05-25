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
		handleClearMemory,
	} = props;
	return (
		<div className="buttons-wrapper">
			<table>
				<tbody>
					<tr className="memory-functions">
						{/* <th>M+</th>
						<th>MR</th> */}
						<th
							colSpan="2"
							onClick={() => {
								handleClearTotal();
								handleClearMemory();
							}}
						>
							MC
						</th>
						<th
							colSpan="2"
							onClick={() => {
								handleClearDisplay();
							}}
						>
							CE
						</th>
					</tr>
					<tr>
						<th
							id="7"
							onClick={(e) => {
								handleInput(e);
							}}
						>
							7
						</th>
						<th
							id="8"
							onClick={(e) => {
								handleInput(e);
							}}
						>
							8
						</th>
						<th
							id="9"
							onClick={(e) => {
								handleInput(e);
							}}
						>
							9
						</th>
						<th
							className="operator"
							onClick={() => {
								handleOperation("*");
								handleInitialTotal();
								handleClearDisplay();
							}}
						>
							x
						</th>
					</tr>
					<tr>
						<th
							id="4"
							onClick={(e) => {
								handleInput(e);
							}}
						>
							4
						</th>
						<th
							id="5"
							onClick={(e) => {
								handleInput(e);
							}}
						>
							5
						</th>
						<th
							id="6"
							onClick={(e) => {
								handleInput(e);
							}}
						>
							6
						</th>
						<th
							className="operator"
							id="-"
							onClick={() => {
								handleOperation("-");
								handleInitialTotal();
								handleClearDisplay();
							}}
						>
							-
						</th>
					</tr>
					<tr>
						<th
							id="1"
							onClick={(e) => {
								handleInput(e);
							}}
						>
							1
						</th>
						<th
							id="2"
							onClick={(e) => {
								handleInput(e);
							}}
						>
							2
						</th>
						<th
							id="3"
							onClick={(e) => {
								handleInput(e);
							}}
						>
							3
						</th>
						<th
							rowSpan="2"
							className="operator"
							id="+"
							onClick={() => {
								handleOperation("+");
								handleInitialTotal();
								handleClearDisplay();
							}}
						>
							+
						</th>
					</tr>
					<tr>
						<th
							id="0"
							onClick={(e) => {
								handleInput(e);
							}}
						>
							0
						</th>
						<th
							className="operator"
							id="÷"
							onClick={() => {
								handleOperation("/");
								handleInitialTotal();
								handleClearDisplay();
							}}
						>
							÷
						</th>
						<th
							className="operator"
							onClick={() => {
								handleCalculate();
								handleDisplayTotal();
							}}
						>
							=
						</th>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default Buttons;
