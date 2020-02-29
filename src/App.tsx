import React from 'react';
import Layout from './components/layout';
import Modal from './components/modal';
import './App.css';
import Game from './components/game';

function App() {
	return (
		<div className="App">
			<Layout>
				<p>Hello World</p>
				<Game />

				<Modal />
			</Layout>
		</div>
	);
}

export default App;
