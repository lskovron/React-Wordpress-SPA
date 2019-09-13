import React from 'react';
import {EditHike} from '../components/EditHike';

//use a container component to alter data...
export class EditHikeContainer extends React.Component {

	constructor(props){
		super(props);

		this.handleSubmit = this.handleSubmit.bind(this);

	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.saveChanges();
	}


	render (){
		let currentHike = {};
		this.props.hikes.map((hike)=>(
			this.props.id === hike.id ? currentHike = {title:hike.title, location:hike.location, distance:hike.distance, notes:hike.notes, id:hike.id} : ''
		))
		return (
			<EditHike 
			currentHike={currentHike} 
			handleSubmit={this.handleSubmit} 
			editDetails={this.props.editDetails} />
		);
	}
}

