import React from 'react';

export const Modal = ({ currentBand }) => {
	return (
		<div
			className='modal fade'
			id='exampleModal'
			aria-labelledby='exampleModalLabel'
			aria-hidden='true'>
			<div className='modal-dialog'>
				<div className='modal-content'>
					<div className='modal-header'>
						<h1 className='modal-title fs-5' id='exampleModalLabel'>
							{currentBand.name}
						</h1>
						<button
							type='button'
							className='btn-close'
							data-bs-dismiss='modal'
							aria-label='Close'>
							X
						</button>
					</div>
					<div className='modal-body'>
						{/* image inside body of modal start */}
						<div className='flex justify-between flex-row mb-4'>
							<img
								src={currentBand.thumb1}
								alt={`Logo of ${currentBand.name}`}
								width='100px'
							/>
							<img
								src={currentBand.thumb2}
								alt={`Logo of ${currentBand.name}`}
								width='100px'
							/>
							<img
								src={currentBand.thumb3}
								alt={`Logo of ${currentBand.name}`}
								width='100px'
							/>
						</div>
						{/* image inside body of modal end*/}
						<h3>{currentBand.info}</h3>
					</div>
					<div className='modal-footer'>
						<button
							type='button'
							className=''
							data-bs-dismiss='modal'>
							Close
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
