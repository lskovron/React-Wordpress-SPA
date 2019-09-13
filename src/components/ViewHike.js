import React from 'react';

//use a stateless function component to render JSX
export const ViewHike = (props) => {
	return (
		<div>
			<h1>Details</h1>
			{props.hikes.map((hike)=>(
				props.id===hike.id ?
				<ul key={hike.id}>
					{hike.title.rendered ? <li><strong>Title: </strong>{hike.title.rendered}</li> : ''}
					{/*hike.distance ? <li><strong>Distance: </strong>{hike.distance}</li> : ''*/}
					{/*hike.location ? <li><strong>Location: </strong>{hike.location}</li> : ''*/}
					{hike.content.rendered ?
						<li><strong>About: </strong><div dangerouslySetInnerHTML={{__html: hike.content.rendered}}></div></li> : ''
					}
					<button onClick={props.editHike}>Edit Details</button>
					<button onClick={props.deleteHike.bind(this, hike.id)}>Delete Hike</button>
					{/*must pass 'id' up to App.js so state can be altered to delete current hike*/}
				</ul>
				: ''
			))}
			<div id="close"><button onClick={props.closeDetails.bind(this)}>close</button></div>
		</div>
	)
}