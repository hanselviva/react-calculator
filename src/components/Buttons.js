import "./components.css";

const Buttons = (props) => {
	const { handleClear, handleOnClick, handleResult } = props;

	return (
		<div className="buttons-wrapper">
			<table>
				<tr className="memory-functions">
					<th>M+</th>
					<th>MR</th>
					<th>MC</th>
					<th onClick={handleClear}>CE</th>
				</tr>
				<tr>
					<th onClick={handleOnClick} value="7">
						7
					</th>
					<th onClick={handleOnClick} value="8">
						8
					</th>
					<th onClick={handleOnClick} value="9">
						9
					</th>
					<th className="operator" value="X">
						X
					</th>
				</tr>
				<tr>
					<th onClick={handleOnClick} value="4">
						4
					</th>
					<th onClick={handleOnClick} value="5">
						5
					</th>
					<th onClick={handleOnClick} value="6">
						6
					</th>
					<th className="operator">-</th>
				</tr>
				<tr>
					<th onClick={handleOnClick} value="7">
						1
					</th>
					<th onClick={handleOnClick} value="8">
						2
					</th>
					<th onClick={handleOnClick} value="3">
						3
					</th>
					<th rowspan="2" className="operator" value="+">
						+
					</th>
				</tr>
				<tr>
					<th onClick={handleOnClick} value="0">
						0
					</th>
					<th className="operator" value="÷">
						÷
					</th>
					<th className="operator" onClick={handleResult}>
						=
					</th>
				</tr>
			</table>
		</div>
	);
};

export default Buttons;
