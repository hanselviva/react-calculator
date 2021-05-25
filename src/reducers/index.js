import { APPLY_NUMBER, CLEAR_DISPLAY } from "../actions/index";

export const initialState = {
	total: 0,
	operation: "+",
	memory: 0,
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
			return null;
	}
};

const reducer = (state, action) => {
	switch (action.type) {
		case APPLY_NUMBER:
			return {
				...state,
				total: calculateResult(state.total, action.payload, state.operation),
			};
		case CLEAR_DISPLAY:
			return {
				...state,
				total: 0,
			};

		default:
			return state;
	}
};

export default reducer;
