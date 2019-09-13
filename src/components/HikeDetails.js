import React from 'react';
import {ViewHike} from './ViewHike';
import {EditHikeContainer} from '../containers/EditHikeContainer';


export const HikeDetails = (props) => {
	return (
		<div id="hike-details">
			<div className="container">
			{props.editing ? (
				<EditHikeContainer 
				hikes={props.hikes} 
				id={props.id}
				saveChanges={props.saveChanges}
				editDetails={props.editDetails} />
			) : (
				<ViewHike 
				hikes={props.hikes} 
				id={props.id} 
				editHike={props.editHike} 
				deleteHike={props.deleteHike}
				closeDetails={props.closeDetails} />
			)}
			</div>
		</div>
	)
}