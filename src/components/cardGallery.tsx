import React, { FC } from 'react';
import { connect } from 'react-redux';
import Card from './card';

interface CardGalleryProps {
	cards: [];
}

const CardGallery: FC<CardGalleryProps> = ({ cards }) => {
	// console.log(cards);
	return (
		<div>
			{cards.map((card, index) => {
				// console.log(card);
				return <Card key={`cardid-${index}`} card={card} image={'Fake'} />;
			})}
		</div>
	);
};

const mapStateToProps = (state: any) => {
	const cards = state.cards.allIds.map((id: any) => {
		return {
			...state.cards.byIds[id],
			id,
		};
	});
	// console.log(cards);
	return { cards };
};

export default connect(mapStateToProps)(CardGallery);
