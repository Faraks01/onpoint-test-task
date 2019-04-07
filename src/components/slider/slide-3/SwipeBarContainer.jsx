import React, { Component } from 'react'
import swipeBarPic from '../../../images/section-3/ice-shard-swipe.png'


export default class SwipeBarContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			index: 0,
			XCoord: null,
			difference: 0,
			duration: 0
		};

		this.BAR_WIDTH = this.props.width;
		this.STEP_25 = Math.round(this.BAR_WIDTH * 0.25)
		this.STEP_50 = Math.round(this.BAR_WIDTH * 0.5)
		this.STEP_75 = Math.round(this.BAR_WIDTH * 0.75)
	}

	trackTouchStart = (e) => {
		let { XCoord } = this.state;
		let { clientX: X } = e.touches[0];
		if (XCoord === null) this.setState({ XCoord: X });
		this.setState({ duration: 0 });
	}

	trackTouchMove = (e) => {
		let { XCoord, difference } = this.state;
		let { clientX: X } = e.touches[0];


		if ((X - XCoord) < 0) {
			this.setState({ difference: 0 });
			return;
		} else if ((X - XCoord) > this.BAR_WIDTH) {
			this.setState({ difference: this.BAR_WIDTH });
			return;
		} else {
			this.setState({ difference: X - XCoord });
		};

		if (difference < this.STEP_25) {
			this.props.setIndex(0);
		} else if (difference > this.STEP_25 && difference <= this.STEP_50) {
			this.props.setIndex(1);
		} else if (difference > this.STEP_50 && difference < this.STEP_75) {
			this.props.setIndex(1);
		} else if (difference >= this.STEP_75) {
			this.props.setIndex(2);
		};

	}

	trackTouchEnd = () => {
		let { duration } = this.props;
		let { difference } = this.state;

		if (difference < this.STEP_25) {
			this.setState({ difference: 0 })
		} else if (difference > this.STEP_25 && difference <= this.STEP_50) {
			this.setState({ difference: this.STEP_50 })
		} else if (difference > this.STEP_50 && difference < this.STEP_75) {
			this.setState({ difference: this.STEP_50 })
		} else if (difference >= this.STEP_75) {
			this.setState({ difference: this.BAR_WIDTH })
		};

		this.setState({ duration });
	}

	render() {
		let { difference, duration } = this.state;
		const swipeContainerStyle = { width: `${this.BAR_WIDTH}px`, transition: `${duration}s` };
		let switcherStyle = { left: `${difference}px`, transition: `${duration}s` };
		let barStrokeStyle = { width: `${difference}px`, transition: `${duration}s` };
		return (
			<div className="swipe-bar-container" style={swipeContainerStyle}>
				<div className="bar">
					<div className="bar-stroke" style={barStrokeStyle}>
						<img
							style={switcherStyle}
							className="bar-picture"
							src={swipeBarPic}
							alt=""
							onTouchStart={this.trackTouchStart}
							onTouchMove={this.trackTouchMove}
							onTouchEnd={this.trackTouchEnd}
						/>
					</div>
				</div>

				<div className="bar-caption">
					<h4 className="year-date">1988</h4>
					<h4 className="year-date">2009</h4>
					<h4 className="year-date">2016</h4>
				</div>
			</div>
		)
	}
}
