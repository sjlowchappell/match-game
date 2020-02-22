import React, { Component } from 'react';
import PropTypes from 'prop-types';

interface CardState {
	hidden: boolean;
}

interface CardProps {
	image: string;
}

class Card extends Component<CardProps, CardState> {
	static propTypes = {
		image: PropTypes.string.isRequired,
	};
	constructor(props: CardProps) {
		super(props);
		// set initial state to be the cat image
		this.state = {
			hidden: true,
		};
	}

	// Click handler updates state based upon the given image
	handleClick = () => {
		this.state.hidden ? this.setState({ hidden: false }) : this.setState({ hidden: true });
	};

	render() {
		return (
			<div>
				{/* Button with handleClick method contains the image */}
				<button onClick={this.handleClick}>
					{/* Conditionally render the image based upon state */}
					{this.state.hidden ? (
						<p>Back Side</p>
					) : (
						// <img src={a} alt="A bunch of cats!" />
						<p>Front Side</p>
						// <img src={b} alt="A bunch of dogs!" />
					)}
				</button>
			</div>
		);
	}
}

export default Card;
