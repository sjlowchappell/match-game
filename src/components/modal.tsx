import React, { FC } from 'react';
import { connect } from 'react-redux';
import { chooseDifficulty, chooseDeck, startGame, startTimer, resetTimer, tick, resetGame } from '../redux/actions';
import styled, { css } from 'styled-components';

interface ContainerProps {
	playing: boolean;
}
const Container = styled.div<ContainerProps>`
	position: fixed;
	display: block;
	z-index: 1;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	overflow: auto;
	background-color: rgb(0, 0, 0);
	background-color: rgba(0, 0, 0, 0.4);
	padding: 50px 0px;
	${props =>
		props.playing &&
		css`
			display: none;
		`}
`;

const ContentContainer = styled.div`
	background-color: #fefefe;
	margin: auto;
	padding: 20px;
	border: 1px solid #888;
	max-width: 95%;
	@media (min-width: 660px) {
		max-width: 80%;
	}
`;

const TextContent = styled.div`
	margin: auto;
	max-width: 95%;
	@media (min-width: 1000px) {
		max-width: 70%;
	}
`;

interface ModalProps {
	chooseDeck: (deckName: string) => void;
	chooseDifficulty: (difficulty: string) => void;
	startGame: () => void;
	startTimer: (interval: number) => void;
	resetTimer: () => void;
	resetGame: () => void;
	tick: () => void;
	state: any;
}

const Modal: FC<ModalProps> = ({
	chooseDeck,
	chooseDifficulty,
	startGame,
	state,
	startTimer,
	resetTimer,
	tick,
	resetGame,
}) => {
	const start = () => {
		console.log('Game is starting, close the modal!');
		// Container style display none -> figure out how to do this
		startGame();
		const interval = setInterval(() => {
			tick();
		});
		startTimer(interval);
	};
	// can pull this out as a helper function as it is used here and in the game
	const reset = () => {
		console.log('Reset clicked! Reset it all!');
		resetTimer();
		resetGame();
	};
	return (
		<Container playing={state.game.playing}>
			<ContentContainer>
				<TextContent>
					<h2>Welcome to Match Game!</h2>
					{/* if no victory boolean, put general statement. otherwise display win or loss */}
					{/* this is broken now that I can't have a null value for victory, need to fix the conditional later */}
					{state.game.completed === false ? (
						<div>
							<h3>The Rules:</h3>
							<p>
								Match Game is a memory matching activity. You'll be provided 16 cards that are face
								down. Select a card to flip it over. Select a second card. If the cards match, they
								remain face up. If they do not, they will flip back over. Try to find all of the matches
								before time runs out!
							</p>

							<p>
								Click Pause at any time to pause the timer and review the rules, or click reset to
								shuffle the cards and start over.
							</p>
						</div>
					) : state.game.victory ? (
						<p>You win!</p>
					) : (
						<p>You lose...</p>
					)}
					{/* STRETCH GOAL: Change Deck and Difficulty. this can be extracted into a component and reused for both decks and difficulty */}
					{/* <h2>Current deck: {state.decks.deckType} </h2>
				<h3>Change deck:</h3>
				<div>
					<button onClick={() => chooseDeck('deck1')}>Deck 1</button>
					<button onClick={() => chooseDeck('deck2')}>Deck 2</button>
					<button onClick={() => chooseDeck('deck3')}>Deck 3</button>
				</div>
				<h2>Current difficulty: {state.difficulty.difficulty}</h2>
				<h3>Change difficulty:</h3>
				<div>
					<button onClick={() => chooseDifficulty('easy')}>Easy</button>
					<button onClick={() => chooseDifficulty('medium')}>Medium</button>
					<button onClick={() => chooseDifficulty('hard')}>Hard</button>
				</div> */}

					{/* Play button should start the game */}
					{state.game.completed ? null : <button onClick={start}>Play</button>}

					<button onClick={reset}>Reset</button>
				</TextContent>
			</ContentContainer>
		</Container>
	);
};

const mapDispatchToProps = {
	chooseDifficulty,
	chooseDeck,
	startGame,
	startTimer,
	resetGame,
	resetTimer,
	tick,
};

// need to figure out how best to extract state here
const mapStateToProps = (state: ModalProps) => {
	return { state };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
