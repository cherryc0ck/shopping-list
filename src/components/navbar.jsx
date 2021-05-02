import React, { Component } from 'react';

class navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <i className="navbar__logo fab fa-waze"></i>
                <span className="navbar__title">SHOPPING LIST</span>
                <span className="navbar__count">
                    {this.props.totalCount}
                </span>
            </nav>
        );
    }
}

export default navbar;