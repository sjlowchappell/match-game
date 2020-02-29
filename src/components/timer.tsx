import React, { FC } from 'react';
import { endGame, incrementTimer } from '../redux/actions';
import { connect } from 'react-redux';

interface TimerProps {
	// timerVal: number;
	// remainingPairs: number;
	// playing: boolean;
	endGame: any;
	incrementTimer: any;
	state: any;
}

const Timer: FC<TimerProps> = ({ state, incrementTimer }) => {
	const timerVal = state.game.timer;
	const remainingPairs = state.cards.remainingPairs;
	const playing = state.game.playing;
	const victory = state.game.victory;
	let seconds = 0;

	// let myTimer;

	// const timer = setInterval(() => {
	// 	console.log(timerVal);
	// 	incrementTimer();
	// }, 1000);

	// if (playing) {
	// 	const myTimer = setInterval(() => {
	// 		console.log(`Outer playing: ${playing}`);
	// 		console.log(`Inner Playing ${playing}`);
	// 		if (!playing) {
	// 			console.log('timer stopped!');
	// 			clearInterval(myTimer);
	// 		}
	// 	}, 1000);
	// 	// myTimer = setInterval(() => {
	// 	// 	console.log(`Playing for ${seconds} seconds`);
	// 	// 	seconds++;
	// 	// }, 1000);
	// }
	// while (playing) {
	// 	// 	if (timerVal >= 0 && remainingPairs === 0) {
	// 	// 		endGame(true);
	// 	// 	} else if (timerVal <= 0) {
	// 	// 		endGame(false);
	// 	// 	} else {

	// 	// 	}
	// }
	return (
		<div>
			<p>Time Remaining:</p>
			<span>0:{timerVal}</span>
			<span>Victory? {victory}</span>
			<button onClick={() => incrementTimer()}>Increment</button>
		</div>
	);
};

// export default Timer;

const mapDispatchToProps = {
	endGame,
	incrementTimer,
};

const mapStateToProps = (state: any) => {
	console.log(state);
	return { state };
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
