import React, { FC } from 'react';
import { connect } from 'react-redux';
import Card from './card';

interface CardGalleryProps {
	cards: {
		deck: [];
		flipped: [];
	};
}

const CardGallery: FC<CardGalleryProps> = ({ cards }) => {
	return (
		<div>
			{/* go through deck and return a new card component for each card */}
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
