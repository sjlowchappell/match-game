import React, { FC } from 'react';
import { connect } from 'react-redux';

interface TimerProps {
	timer: {
		time: number;
	};
}

const Timer: FC<TimerProps> = ({ timer }) => {
	const format = (time: number) => {
		const pad = (time: string, length: number) => {
			while (time.length < length) {
				time = '0' + time;
			}
			return time;
		};

		const timestamp = new Date(time);
		let s = pad(timestamp.getSeconds().toString(), 2);
		let ms = pad(timestamp.getMilliseconds().toString(), 2);

		return `${s} . ${ms}`;
	};
	return (
		<div>
			<p>{format(timer.time)}</p>
		</div>
	);
};

const mapStateToProps = (state: any) => {
	const timer = state.timer;
	return { timer };
};

export default connect(mapStateToProps)(Timer);
