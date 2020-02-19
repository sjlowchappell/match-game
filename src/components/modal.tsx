import React, { FC } from 'react';

const Modal: FC = () => {
	return (
		<div>
			<h2>Welcome to Match Game!</h2>
			<h3>Rules:</h3>
			<p>
				Here are the rules ... Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum eos
				accusantium consectetur, fugiat laudantium totam quibusdam voluptatem illum aut adipisci laborum nisi
				fugit temporibus nostrum! Sequi ex quae inventore? Excepturi.
			</p>
			<h3>Choose your deck:</h3>
			<div>
				<button>Deck 1</button>
				<button>Deck 2</button>
				<button>Deck 3</button>
			</div>
			<h3>Choose your difficulty:</h3>
			<div>
				<button>Easy</button>
				<button>Medium</button>
				<button>Hard</button>
			</div>
		</div>
	);
};

export default Modal;
