import {
	APPLY_NUMBER,
	CLEAR_DISPLAY,
	INPUT_DISPLAY,
	CHANGE_OPERATION,
} from "../actions/index";

export const initialState = {
	display: 0,
	total: 0,
	memory: 0,
	operation: "+",
};

const displayValues = (initialValue, inputValue) => {
	if (initialValue === 0) {
		return inputValue;
	} else {
		return initialValue + inputValue;
	}
};

const calculateResult = (num1, num2, operation) => {
	switch (operation) {
		case "+":
			return num1 + num2;
		case "*":
			return num1 * num2;
		case "-":
			return num1 * num2;
		case "/":
			return num1 / num2;
		default:
		// 	do nothing;
	}
};

const reducer = (state, action) => {
	switch (action.type) {
		case INPUT_DISPLAY:
			return {
				...state,
				display: displayValues(state.display, action.payload),
			};
		case CHANGE_OPERATION:
			return {
				...state,
				operation: action.payload,
			};
		case CLEAR_DISPLAY:
			return {
				...state,
				display: 0,
			};
		// case APPLY_NUMBER:
		// 	return {
		// 		...state,
		// 		total: calculateResult(state.total, action.payload, state.operation),
		// 	};

		default:
			return state;
	}
};

export default reducer;
