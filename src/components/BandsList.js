import React from 'react';
import { Band } from './Band';

export const BandsList = ({ bands, changeCurrentBand }) => {
	return (
		<div>
			<div className='container mx-auto'>
				<Band bands={bands} changeCurrentBand={changeCurrentBand} />
			</div>
		</div>
	);
};
