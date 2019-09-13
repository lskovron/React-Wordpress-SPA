import React from 'react';

//use a stateless function component to render JSX
export const HikeList = (props) => {
	return (
		<div className='container'>
			<div className="row">
				{props.hikes.map((hike)=>( //loop through hikes - use id instead of index as key for uniqueness & consistency
					<div key={hike.id} className='col-sm-3'>
						<h2>{hike.title.rendered}</h2>
						<button className="btn btn-primary" onClick={props.viewDetails.bind(this, hike.id)}>View Details</button>
					</div>
				))}
			</div>
		</div>
	);
}