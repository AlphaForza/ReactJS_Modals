import React from 'react';

export const Band = ({ bands, changeCurrentBand }) => {
	return (
		<div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
			{bands.map((el) => (
				<div className='flex flex-col border-2' key={el.id}>
					{/* head of card */}
					<div>
						<h2 className='text-left text-2xl text-blue-600 font-semibold py-3 pl-6 border-b-2'>
							{el.name}
						</h2>
					</div>
					{/* body of card */}
					<div className='flex px-6 py-4'>
						<img src={el.img_url} alt='img of card' width='200px' />
						<p className='pl-5'>{el.info.substring(0, 200)}...</p>
					</div>
					{/* footer/btn of card */}
					<div className='mt-5 p-3 flex items-center justify-end border-t-2'>
						<button
							className='text-lg bg-[#2561fa] px-4 py-2 text-white rounded-lg'
							data-bs-toggle='modal'
							data-bs-target='#exampleModal'
							onClick={() => {
								changeCurrentBand(el);
							}}>
							read more
						</button>
					</div>
				</div>
			))}
		</div>
	);
};
