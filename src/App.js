import "./App.css";
import React from "react";
import TotalDisplay from "./components/TotalDisplay";
import Buttons from "./components/Buttons";

//
import { useReducer } from "react";
import reducer, { initialState } from "./reducers/index";
import {
	applyNumber,
	clearDisplay,
	inputDisplay,
	changeOperation,
} from "./actions/index";

//
//

function App() {
	const [state, dispatch] = useReducer(reducer, initialState);

	const handleClear = () => {
		dispatch(clearDisplay());
	};

	const handleOnClick = (e, number) => {
		dispatch(inputDisplay(e.target.id));
		// dispatch(applyNumber(number));
	};

	const handleResult = (e) => {
		dispatch(applyNumber(e.target.id));
		// console.log(applyNumber(e.target.id));
	};

	return (
		<div className="App">
			<TotalDisplay display={state.display} />
			<Buttons
				handleClear={handleClear}
				handleOnClick={handleOnClick}
				handleResult={handleResult}
				changeOperation={changeOperation}
			/>
		</div>
	);
}

export default App;
