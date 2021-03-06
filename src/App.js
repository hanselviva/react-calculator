import "./App.css";
import React from "react";
import TotalDisplay from "./components/TotalDisplay";
import Buttons from "./components/Buttons";

//
import { useReducer } from "react";
import reducer, { initialState } from "./reducers/index";
import {
	inputDisplay,
	clearDisplay,
	changeOperation,
	initialTotal,
	calculateTotal,
	displayTotal,
	clearTotal,
	clearMemory,
} from "./actions/index";

//
//

function App() {
	const [state, dispatch] = useReducer(reducer, initialState);

	const dispatchInput = (e) => {
		dispatch(inputDisplay(e.target.id));
	};
	const dispatchClearDisplay = () => {
		dispatch(clearDisplay());
	};
	const dispatchOperation = (operator) => {
		dispatch(changeOperation(operator));
	};
	const dispatchInitialTotal = () => {
		dispatch(initialTotal());
	};
	const dispatchCalculateTotal = (value) => {
		dispatch(calculateTotal(value));
	};
	const dispatchDisplayTotal = () => {
		dispatch(displayTotal);
	};
	const dispatchClearTotal = () => {
		dispatch(clearTotal());
	};
	const dispatchClearMemory = () => {
		dispatch(clearMemory());
	};

	return (
		<div className="App">
			<TotalDisplay
				display={state.display}
				operation={state.operation}
				initialTotal={state.initialTotal}
				total={state.total}
				totalReveal={state.totalReveal}
			/>
			<Buttons
				handleInput={dispatchInput}
				handleClearDisplay={dispatchClearDisplay}
				handleOperation={dispatchOperation}
				handleCalculate={dispatchCalculateTotal}
				handleDisplayTotal={dispatchDisplayTotal}
				handleClearTotal={dispatchClearTotal}
				handleInitialTotal={dispatchInitialTotal}
				handleClearMemory={dispatchClearMemory}
			/>
		</div>
	);
}

export default App;
