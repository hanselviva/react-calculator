import "./App.css";
import React from "react";
import TotalDisplay from "./components/TotalDisplay";
import Buttons from "./components/Buttons";

//
import { useReducer } from "react";
import reducer, { initialState } from "./reducers/index";

//
//

function App() {
	return (
		<div className="App">
			<TotalDisplay />
			<Buttons />
		</div>
	);
}

export default App;
