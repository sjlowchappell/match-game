import { CHOOSE_DECK } from '../actionTypes.js';

const initialState = {
	deckType: 'deck1',
};

export default function(state = initialState, action) {
	switch (action.type) {
		case CHOOSE_DECK: {
			const { deckName } = action.payload;
			return {
				...state,
				deckType: deckName,
			};
		}
		default:
			return state;
	}
}
