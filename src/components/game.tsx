import React, { FC } from 'react';
import { connect } from 'react-redux';
import CardGallery from './cardGallery';
import Timer from './timer';
import { resetTimer, stopTimer, pauseGame, endGame, resetGame } from '../redux/actions';
import styled from 'styled-components';

interface GameProps {
	endGame: (endType: boolean) => void;
	pauseGame: () => void;
	stopTimer: () => void;
	resetTimer: () => void;
	resetGame: () => void;
	state: any;
}

const Info = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	@media (min-width: 550px) {
		max-width: 60%;
		margin: auto;
	}
`;

const Game: FC<GameProps> = ({ state, stopTimer, resetTimer, pauseGame, endGame, resetGame }) => {
	// Game win conditions
	// if playing is set to true
	if (state.game.playing) {
		// check if the timer is greater than 0 and there are no remaining pairs
		if (state.timer.time >= 0 && state.cards.remainingPairs === 0) {
			// if so, you win!
			console.log('you won!');
			// dispatch endGame action for victory
			endGame(true);
			// dispatch stopTimer action
			stopTimer();

			// check if the timer has run out
		} else if (state.timer.time <= 0) {
			// if so, you lose :(
			console.log('you lost!');

			// dispatch endGame action for loss
			endGame(false);
			// dispatch resetTimer action
			resetTimer();
		}
	}
	const pause = () => {
		// when pausing the game, pull up the modal component
		console.log('Game paused, pull up the modal');
		// dispatch the pause action
		pauseGame();
		// dispatch the stop timer action
		stopTimer();
	};
	const reset = () => {
		console.log('Reset clicked! Reset it all!');
		resetTimer();
		resetGame();
	};
	return (
		<div>
			{/* Display remaining pairs of cards */}
			<p>Remaining pairs: {state.cards.remainingPairs}</p>
			<Info>
				{/* Timer Component */}
				<Timer />
				{/* Pause buttons */}
				{/* When clicking pause, it should bring up the modal */}
				<button onClick={pause}>Pause</button>
				{/* <button onClick={reset}>Reset</button> */}
			</Info>
			{/* Card Gallery Component */}
			<CardGallery />
		</div>
	);
};

const mapDispatchToProps = {
	pauseGame,
	endGame,
	stopTimer,
	resetTimer,
	resetGame,
};

const mapStateToProps = (state: any) => {
	return { state };
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
