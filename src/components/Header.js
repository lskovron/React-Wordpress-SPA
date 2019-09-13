import React from 'react';

export class Header extends React.Component {
	render(){
		return (
			<section id="site-header" style={{backgroundImage:this.props.background}}>
				<h1 className="site-title">{this.props.title}</h1>
			</section>
		);
	}
}