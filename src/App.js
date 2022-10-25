import React, { Component } from 'react';
import { BandsList } from './components/BandsList';
import { Modal } from './components/Modal';

class App extends Component {
	state = {
		bands: [],
		currentBand: {},
	};
	changeCurrentBand = (el) => {
		this.setState({
			currentBand: el,
		});
	};

	componentDidMount() {
		fetch(
			'https://raw.githubusercontent.com/Danilovesovic/bands/master/bands_with_id.json'
		)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				this.setState({
					bands: data,
				});
			});
	}

	render() {
		return (
			<div>
				{/* header of app */}
				<div className='flex items-center justify-center border-[#4e45ff] border-b-2 py-2 mb-5'>
					<h1 className='text-center text-4xl text-[#296caf] font-bold'>
						Bands of Serbia
					</h1>
				</div>
				{/* header of app */}
				<BandsList
					bands={this.state.bands}
					changeCurrentBand={this.changeCurrentBand}
				/>
				<Modal currentBand={this.state.currentBand} />
			</div>
		);
	}
}

export default App;
