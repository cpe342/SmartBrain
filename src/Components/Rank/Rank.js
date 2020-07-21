import React from 'react';


const Rank = ({name,entries}) =>{
	return (
		<div className='ma4 mt0'>
			<div className='white f5'>
				{`${name},your current entry count is...`}
				<div className='white f1'>
					{entries}
				</div>
			</div>
		</div>
	);
}

export default Rank;