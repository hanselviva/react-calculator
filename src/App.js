import "./App.css";
import React from "react";
import TotalDisplay from "./components/TotalDisplay";
import Buttons from "./components/Buttons";

//
import { useReducer } from "react";
import reducer, { initialState } from "./reducers/index";
import { applyNumber, clearDisplay, inputNumbers } from "./actions/index";

//
//

function App() {
	const [state, dispatch] = useReducer(reducer, initialState);

	const handleClear = () => {
		dispatch(clearDisplay());
	};

	const handleOnClick = (e) => {
		dispatch(inputNumbers(e.target.value));
	};

	const handleResult = (number) => {
		dispatch(applyNumber(number));
	};

	return (
		<div className="App">
			<TotalDisplay value={state.input} />
			<Buttons
				handleClear={handleClear}
				handleOnClick={handleOnClick}
				handleResult={handleResult}
			/>
		</div>
	);
}

export default App;
