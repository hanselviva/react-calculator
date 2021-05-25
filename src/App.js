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
	setInitialTotal,
	calculateTotal,
	displayTotal,
	clearTotal,
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
		dispatch(setInitialTotal());
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

	return (
		<div className="App">
			<TotalDisplay display={state.display} />
			<Buttons
				handleInput={dispatchInput}
				handleClearDisplay={dispatchClearDisplay}
				handleOperation={dispatchOperation}
				handleCalculate={dispatchCalculateTotal}
				handleDisplayTotal={dispatchDisplayTotal}
				handleClearTotal={dispatchClearTotal}
				handleInitialTotal={dispatchInitialTotal}
			/>
		</div>
	);
}

export default App;
