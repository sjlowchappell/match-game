import { START_GAME, PAUSE_GAME, END_GAME, RESET_GAME } from '../actionTypes';

interface GameState {
	playing: boolean;
	victory: boolean;
}
interface ActionState {
	type: string;
	payload: {
		endType: boolean;
	};
}

const initialState: GameState = {
	playing: false,
	victory: false,
};

export default function(state = initialState, action: ActionState) {
	switch (action.type) {
		case START_GAME: {
			return {
				...state,
				playing: true,
			};
		}
		case PAUSE_GAME: {
			return {
				...state,
				playing: false,
			};
		}
		case END_GAME: {
			return {
				...state,
				playing: false,
				victory: action.payload.endType,
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
