import React, { FC } from 'react';
import { connect } from 'react-redux';
import CardGallery from './cardGallery';
import Timer from './timer';
import { resetTimer, stopTimer, pauseGame, endGame } from '../redux/actions';

interface GameProps {
	pauseGame: any;
	endGame: any;
	stopTimer: any;
	resetTimer: any;
	state: any;
}

const Game: FC<GameProps> = ({ state, stopTimer, resetTimer, pauseGame, endGame }) => {
	// console.log(startGame);
	if (state.game.playing) {
		if (state.timer.time >= 0 && state.cards.remainingPairs === 0) {
			console.log('you won!');
			endGame(true);
			// stop timer
			stopTimer();
		} else if (state.timer.time <= 0) {
			console.log('you lost!');
			endGame(false);
			// stop timer
			resetTimer();
		}
	}
	return (
		<div>
			<p>This is the game container</p>
			{/* Timer Component */}
			<Timer />
			{/* Pause buttons */}
			{/* When clicking pause, it should bring up the modal */}
			<button onClick={pauseGame}>Pause</button>
			<button onClick={() => endGame(true)}>Win</button>
			<button onClick={() => endGame(false)}>Lose</button>
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
};

const mapStateToProps = (state: any) => {
	return { state };
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
