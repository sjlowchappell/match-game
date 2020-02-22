import { FLIP_CARD } from './actionTypes';

export const flipCard = id => ({
	type: FLIP_CARD,
	payload: { id },
});
