export const INPUT_DISPLAY = "INPUT_DISPLAY";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
//
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const SET_INITIAL_TOTAL = "SET_INITIAL_TOTAL";
export const CALCULATE_TOTAL = "CALCULATE_TOTAL";
export const DISPLAY_TOTAL = "DISPLAY_TOTAL";
export const CLEAR_TOTAL = "CLEAR_TOTAL";
//
export const inputDisplay = (values) => {
	return { type: INPUT_DISPLAY, payload: values };
};
export const clearDisplay = () => {
	return { type: CLEAR_DISPLAY };
};
//
//
export const changeOperation = (operator) => {
	return { type: CHANGE_OPERATION, payload: operator };
};
export const setInitialTotal = () => {
	return { type: SET_INITIAL_TOTAL };
};
export const calculateTotal = (number) => {
	return { type: CALCULATE_TOTAL, payload: number };
};
export const displayTotal = () => {
	return { type: DISPLAY_TOTAL };
};
export const clearTotal = (number) => {
	return { type: CLEAR_TOTAL, payload: number };
};
