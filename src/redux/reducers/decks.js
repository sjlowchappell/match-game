import { CHOOSE_DECK, RESET_GAME } from '../actionTypes.tsx';

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
		case RESET_GAME: {
			return {
				...initialState,
			};
		}
		default:
			return state;
	}
}
