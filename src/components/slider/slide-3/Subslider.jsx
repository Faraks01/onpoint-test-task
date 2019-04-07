import React from 'react'
import SubSlide1 from './subslides/SubSlide1'
import SubSlide2 from './subslides/SubSlide2'
import SubSlide3 from './subslides/SubSlide3'
import SwipeBarContainer from './SwipeBarContainer'

export default class Subslider extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			index: 0
		};

	}

	handleIndex = (index) => {
		this.setState({ index });
	}

	render() {
		let { duration } = this.props;
		let sliderStyle = {
			transform: `translateX(calc(-100% * ${this.state.index}))`,
			transition: `${duration}s`
		};

		return (
			<>
				<div
					className="subslider-container"
					style={sliderStyle}
				>
					<SubSlide1 />
					<SubSlide2 />
					<SubSlide3 />
				</div>
				<SwipeBarContainer
					width={646}
					duration={duration}
					setIndex={this.handleIndex}
				/>
			</>
		)
	}
}

