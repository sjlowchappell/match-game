import {
	FLIP_CARD,
	COMPARE_CARD,
	CHOOSE_DECK,
	CHOOSE_DIFFICULTY,
	START_GAME,
	PAUSE_GAME,
	END_GAME,
	TICK,
	START_TIMER,
	STOP_TIMER,
	RESET_TIMER,
	RESET_GAME,
} from './actionTypes';

// Card Actions
export const flipCard = id => ({
	type: FLIP_CARD,
	payload: { id },
});

export const compareCard = () => ({
	type: COMPARE_CARD,
});

// Modal Actions

export const chooseDeck = deckName => ({
	type: CHOOSE_DECK,
	payload: { deckName },
});

export const chooseDifficulty = difficultyLevel => ({
	type: CHOOSE_DIFFICULTY,
	payload: { difficultyLevel },
});

// Timer Actions

export const startTimer = interval => ({
	type: START_TIMER,
	payload: {
		offset: Date.now(),
		interval,
	},
});

export const tick = () => ({
	type: TICK,
	payload: {
		time: Date.now(),
	},
});

export const resetTimer = () => ({
	type: RESET_TIMER,
});

export const stopTimer = () => ({
	type: STOP_TIMER,
});

// Game Actions

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

export const resetGame = () => ({
	type: RESET_GAME,
});
