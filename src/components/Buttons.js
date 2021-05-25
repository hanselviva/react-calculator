import "./components.css";

const Buttons = (props) => {
	const { handleClear, handleOnClick, handleResult, changeOperation } = props;

	const handleOperator = (operator) => {
		handleClear();
		// changeOperation(operator);
	};

	return (
		<div className="buttons-wrapper">
			<table>
				<tbody>
					<tr className="memory-functions">
						<th>M+</th>
						<th>MR</th>
						<th>MC</th>
						<th onClick={handleClear}>CE</th>
					</tr>
					<tr>
						<th
							id="7"
							onClick={(e) => {
								handleOnClick(e, 7);
							}}
						>
							7
						</th>
						<th onClick={handleOnClick} id="8">
							8
						</th>
						<th onClick={handleOnClick} id="9">
							9
						</th>
						<th
							className="operator"
							onClick={() => {
								changeOperation("*");
								console.log("test");
							}}
						>
							x
						</th>
					</tr>
					<tr>
						<th onClick={handleOnClick} id="4">
							4
						</th>
						<th onClick={handleOnClick} id="5">
							5
						</th>
						<th onClick={handleOnClick} id="6">
							6
						</th>
						<th className="operator" id="-" onClick={handleOperator}>
							-
						</th>
					</tr>
					<tr>
						<th onClick={handleOnClick} id="7">
							1
						</th>
						<th onClick={handleOnClick} id="8">
							2
						</th>
						<th onClick={handleOnClick} id="9">
							3
						</th>
						<th
							rowSpan="2"
							className="operator"
							id="+"
							onClick={handleOperator}
						>
							+
						</th>
					</tr>
					<tr>
						<th onClick={handleOnClick} id="0">
							0
						</th>
						<th className="operator" id="÷" onClick={handleOperator}>
							÷
						</th>
						<th className="operator" onClick={handleResult}>
							=
						</th>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default Buttons;
