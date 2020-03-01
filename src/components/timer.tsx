import React, { FC } from 'react';
import { startTimer, tick, stopTimer, resetTimer } from '../redux/actions';
import { connect } from 'react-redux';

interface TimerProps {
	// timerVal: number;
	// remainingPairs: number;
	// playing: boolean;
	// endGame: any;
	// incrementTimer: any;
	startTimer: any;
	tick: any;
	stopTimer: any;
	timer: any;
	resetTimer: any;
}

const Timer: FC<TimerProps> = ({ timer, startTimer, tick, stopTimer, resetTimer }) => {
	const start = () => {
		const interval = setInterval(() => {
			tick();
		});
		startTimer(interval);
	};
	const stop = () => {
		stopTimer();
	};
	const reset = () => {
		resetTimer();
	};
	const format = (time: any) => {
		const pad = (time: any, length: any) => {
			while (time.length < length) {
				time = '0' + time;
			}
			return time;
		};

		time = new Date(time);
		let m = pad(time.getMinutes().toString(), 2);
		let s = pad(time.getSeconds().toString(), 2);
		let ms = pad(time.getMilliseconds().toString(), 3);

		return `${m} : ${s} . ${ms}`;
	};
	return (
		<div>
			<p>Time Remaining: {format(timer.time)}</p>
			{/* <span>0:{timer.time}</span> */}
			<span>Victory?</span>
			<button onClick={start}>Start</button>
			<button onClick={stop}>Stop</button>
			<button onClick={reset}>Reset</button>
		</div>
	);
};

// export default Timer;

const mapDispatchToProps = {
	startTimer,
	tick,
	stopTimer,
	resetTimer,
};

const mapStateToProps = (state: any) => {
	const timer = state.timer;
	return { timer };
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
