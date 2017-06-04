import React from 'react';
import classNames from 'classnames';

export default class Button extends React.Component {
	render() {
		const className = classnames({
			Button: true,
			'is-large': this.props.size === 'large',
		});
		return <button className={className} onClick={this.props.onClick}>
			{this.props.clildren}
			</button>;
	}
}
