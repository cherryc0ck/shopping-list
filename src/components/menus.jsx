import React, { Component } from 'react';
import Menu from './menu';

class Menus extends Component {
	render() {
		return (
			<ul>
				{this.props.items.map(item=>
					<Menu 
						key={item.id}
					/>
				)}
			</ul>
		);
	}
}

export default Menus;