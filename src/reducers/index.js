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
// num1 = display | num2 = initialTotal | num3 =
const calculateTotal = (display, initialTotal, total, memory, operation) => {
	if (total === 0 && memory === 0) {
		switch (operation) {
			case "+":
				return +display + +initialTotal;
			case "*":
				return display * initialTotal;
			case "-":
				return initialTotal - display;
			case "/":
				return initialTotal / display;

			default:
			// 	do nothing;
		}
	} else {
		switch (operation) {
			case "+":
				return +total + +display;
			case "*":
				return total * initialTotal;
			case "-":
				return total - display;
			case "/":
				return total / display;

			default:
		}
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

				initialTotal: state.display,
			};
		case INITIAL_TOTAL:
			return {
				...state,
				initialTotal: state.display,
			};
		case CALCULATE_TOTAL:
			return {
				...state,
				totalReveal: true,
				total: calculateTotal(
					state.display,
					state.initialTotal,
					state.total,
					state.memory,
					state.operation,
				),
				memory: state.total,
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
