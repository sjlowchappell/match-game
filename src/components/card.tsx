import React, { FC } from 'react';
import { connect } from 'react-redux';
import { flipCard, compareCard } from '../redux/actions';
import styled from 'styled-components';
import backside from '../assets/backside.png';

const Container = styled.div``;

const Button = styled.button`
	margin: 5px;
	padding: 0px;
	@media (min-width: 470px) {
		width: calc(100% - 10px);
	}
`;

interface CardProps {
	card: {
		locked: boolean;
		compareVal: number;
		hidden: boolean;
		id: number;
		image: string;
	};
	flipCard: (id: number) => void;
	compareCard: () => void;
	flipped: number[];
}

const Card: FC<CardProps> = ({ card, flipCard, compareCard, flipped }) => {
	const { id, locked, compareVal, hidden, image } = card;
	const handleClick = () => {
		flipCard(id);
		if (flipped.length) {
			// setTimeout so that the user has a moment to see both cards before they are compared and flipped. Currently messes with things so maybe disable flipcard until it is over? will have to figure this out later
			setTimeout(compareCard, 300);
		}
	};
	return (
		<Container>
			{/* If a card has been matched already and locked is true, just show the card */}
			{locked ? (
				<img src={image} alt="Icon" />
			) : (
				// If the card has not been matched, render a button that can be clicked to flip the card
				<div>
					<Button onClick={() => handleClick()}>
						{/* Conditionally render the image based upon state */}
						{hidden ? <img src={backside} alt="Backside" /> : <img src={image} alt="Icon" />}
					</Button>
				</div>
			)}
		</Container>
	);
};

const mapDispatchToProps = {
	flipCard,
	compareCard,
};

export default connect(null, mapDispatchToProps)(Card);
