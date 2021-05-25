export const APPLY_NUMBER = "APPLY_NUMBER";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const INPUT_DISPLAY = "INPUT_DISPLAY";
export const CHANGE_OPERATION = "CHANGE_OPERATION";

export const applyNumber = (number) => {
	return { type: APPLY_NUMBER, payload: number };
};

export const changeOperation = (operator) => {
	console.log("test");
	return { type: CHANGE_OPERATION, payload: operator };
};

export const clearDisplay = () => {
	return { type: CLEAR_DISPLAY };
};

export const inputDisplay = (values) => {
	return { type: INPUT_DISPLAY, payload: values };
};
