import { CHOOSE_DECK, RESET_GAME } from '../actionTypes';

interface DeckState {
	deckType: string;
}
interface ActionState {
	type: string;
	payload: {
		deckName: string;
	};
}

const initialState: DeckState = {
	deckType: 'deck1',
};

export default function(state = initialState, action: ActionState) {
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
