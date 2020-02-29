import {
	FLIP_CARD,
	COMPARE_CARD,
	CHOOSE_DECK,
	CHOOSE_DIFFICULTY,
	START_GAME,
	PAUSE_GAME,
	END_GAME,
	INCREMENT_TIMER,
	START_TIMER,
	STOP_TIMER,
} from './actionTypes';

export const flipCard = id => ({
	type: FLIP_CARD,
	payload: { id },
});

export const compareCard = () => ({
	type: COMPARE_CARD,
});

export const chooseDeck = deckName => ({
	type: CHOOSE_DECK,
	payload: { deckName },
});

export const chooseDifficulty = difficultyLevel => ({
	type: CHOOSE_DIFFICULTY,
	payload: { difficultyLevel },
});

export const startTimer = () => ({
	type: START_TIMER,
	payload: {
		offset: Date.now(),
		interval,
	},
});

export const incrementTimer = () => ({
	type: INCREMENT_TIMER,
});

export const stopTimer = () => ({
	type: STOP_TIMER,
});

export const startGame = () => ({
	type: START_GAME,
});
export const pauseGame = () => ({
	type: PAUSE_GAME,
});
export const endGame = endType => ({
	type: END_GAME,
	payload: { endType },
});
