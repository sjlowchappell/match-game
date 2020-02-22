import React, { FC } from 'react';
import { connect } from 'react-redux';
import Card from './card';

interface CardGalleryProps {
	cards: {
		deck: [];
		flipped: [];
		remainingPairs: number;
	};
}

const CardGallery: FC<CardGalleryProps> = ({ cards }) => {
	return (
		<div>
			{/* TODO: Move remaining pairs to the timer component maybe? idk */}
			{/* if remaining pairs reaches 0, trigger a You Win! Popup */}
			{/* If Timer reaches 0 and remaining pairs > 0, trigger a You Lose Popup */}
			<p>Remaining pairs: {cards.remainingPairs}</p>
			{cards.deck.map((card: any, index: any) => {
				return <Card key={`cardid-${index}`} card={card} image={'Fake'} flipped={cards.flipped} />;
			})}
		</div>
	);
};

const mapStateToProps = (state: CardGalleryProps) => {
	const cards = state.cards;
	return { cards };
};

export default connect(mapStateToProps)(CardGallery);
