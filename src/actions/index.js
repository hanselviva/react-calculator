export const APPLY_NUMBER = "APPLY_NUMBER";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";

export const applyNumber = (number) => {
	return { type: APPLY_NUMBER, payload: number };
};

export const clearDisplay = () => {
	return { type: CLEAR_DISPLAY };
};
