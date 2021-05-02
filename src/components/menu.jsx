import React, { Component } from 'react';

class Menu extends Component {
	render() {
    return (
			<>
				<li className="item">
					<div className="count__container">
						<button className="count__btn item-increase">
							<i className="fas fa-plus-circle"></i>
						</button>
						<span className="item__count">5</span>
						<button className="count__btn item-decrease">
							<i className="fas fa-minus-circle"></i>
						</button>
					</div>
					<span className="item__name">TOMATOES</span>
					<div className="btn__container">
						<button className="item__btn item-check"></button>
						<button className="item__btn item-delete">
							<i className="fas fa-trash"></i>
						</button>
					</div>
				</li>
			</>
    );
  }
}

export default Menu;