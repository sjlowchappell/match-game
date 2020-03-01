import React, { FC } from 'react';
import { connect } from 'react-redux';

interface TimerProps {
	timer: {
		time: number;
	};
}

const Timer: FC<TimerProps> = ({ timer }) => {
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
		</div>
	);
};

const mapStateToProps = (state: any) => {
	const timer = state.timer;
	return { timer };
};

export default connect(mapStateToProps)(Timer);
