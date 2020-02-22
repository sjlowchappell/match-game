import React from 'react';
import Layout from './components/layout';
import CardGallery from './components/cardGallery';
import Modal from './components/modal';
import Timer from './components/timer';
import './App.css';

function App() {
	return (
		<div className="App">
			<Layout>
				<p>Hello World</p>
				<Timer />
				<Modal />
				<CardGallery />
				{/* <Card image={'Fake Path'} /> */}
			</Layout>
		</div>
	);
}

export default App;
