import {
	INPUT_DISPLAY,
	CLEAR_DISPLAY,
	//
	CHANGE_OPERATION,
	INITIAL_TOTAL,
	CALCULATE_TOTAL,
	DISPLAY_TOTAL,
	CLEAR_TOTAL,
} from "../actions/index";

export const initialState = {
	display: 0,
	operation: "+",
	initialTotal: 0,
	total: 0,
	memory: 0,
	totalReveal: false,
};

const displayValues = (initialValue, inputValue) => {
	if (initialValue === 0) {
		return inputValue;
	} else {
		return initialValue + inputValue;
	}
};

const calculateTotal = (num1, num2, operation) => {
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
				totalReveal: false,
			};
		case CLEAR_DISPLAY:
			return {
				...state,
				display: 0,
			};
		//
		//
		case CHANGE_OPERATION:
			return {
				...state,
				operation: action.payload,
				totalReveal: false,
			};
		case INITIAL_TOTAL:
			return {
				...state,
				initialTotal: state.display,
			};
		case CALCULATE_TOTAL:
			return {
				...state,
				total: calculateTotal(
					state.initialTotal,
					state.display,
					state.operation,
				),
				initialTotal: calculateTotal(
					state.initialTotal,
					state.display,
					state.operation,
				),
				totalReveal: true,
			};
		case DISPLAY_TOTAL:
			return {
				...state,
				totalReveal: true,
			};
		case CLEAR_TOTAL:
			return {
				...state,
				total: 0,
			};

		default:
			return state;
	}
};

export default reducer;
