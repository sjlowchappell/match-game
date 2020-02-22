import { FLIP_CARD, COMPARE_CARD } from './actionTypes';

export const flipCard = id => ({
	type: FLIP_CARD,
	payload: { id },
});

export const compareCard = () => ({
	type: COMPARE_CARD,
});
