import React from 'react';

//use a stateless function component to render JSX
export const EditHike = (props) => {
	return (
		<form onSubmit={props.handleSubmit} data-id={props.currentHike.id}>		
			<label>Title</label>
			<input 
				type='text' 
				name="title" 
				data-id={props.currentHike.id}
				value={props.currentHike.title} 
				onChange={props.editDetails} />

			<label>Location</label>
			<input 
				type='text' 
				name="location"
				data-id={props.currentHike.id}
				value={props.currentHike.location} 
				onChange={props.editDetails} />

			<label>Distance</label>
			<input 
				type='text'
				name="distance"
				data-id={props.currentHike.id}
				value={props.currentHike.distance} 
				onChange={props.editDetails} />

			<label>Notes</label>
			<input 
				type='text' 
				name="notes"
				data-id={props.currentHike.id}
				value={props.currentHike.notes} 
				onChange={props.editDetails} />
			

			<input type='submit' value='Save' />

		</form>
	);

}