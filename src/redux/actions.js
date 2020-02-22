import { FLIP_CARD, COMPARE_CARD, CHOOSE_DECK, CHOOSE_DIFFICULTY } from './actionTypes';

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
