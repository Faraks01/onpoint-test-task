import React, { Component } from 'react'
import Slide1 from './slide-1/Slide1'
import Slide2 from './slide-2/Slide2'
import Slide3 from './slide-3/Slide3'

export default class Slider extends Component {
	constructor(props) {
		super(props);

		this.DOTS_CLEAR_STATE = {
			0: "white",
			1: "white",
			2: "white"
		}

		this.state = {
			dots: {
				0: "#f78b1f",
				1: "white",
				2: "white"
			}
		};
	}

	componentDidUpdate(prevProps) {
		if (prevProps.index !== this.props.index) {
			this.setState({
				dots: {
					...this.DOTS_CLEAR_STATE,
					[this.props.index]: "#f78b1f"
				}
			})
		}
	}

	componentDidMount() {
		document.addEventListener("touchstart", this.props.trackTouchStart, false);
		document.addEventListener("touchmove", this.props.trackTouchMove, false);
		document.addEventListener("touchend", this.props.trackTouchEnd, false);
	}	

	componentWillUnmount() {
		document.removeEventListener("touchstart", this.props.trackTouchStart, false);
		document.removeEventListener("touchmove", this.props.trackTouchMove, false);
		document.removeEventListener("touchend", this.props.trackTouchEnd, false);
	}

	render() {
		const { dots } = this.state;
		const { index, duration, cubicBezier } = this.props;
		let sliderStyle = {
			transform: `translateY(calc(-100% * ${index}))`,
			transition: `${duration}s ${cubicBezier}`
		};
		return (
			<main>
				<div className="container" style={sliderStyle}>
					<Slide1 duration={duration} active={index === 0} />
					<Slide2 duration={duration} active={index === 1} />
					<Slide3 />
				</div>

				<div className="dots-indicator">
					<div className="dot" style={{ backgroundColor: `${dots[0]}` }} />
					<div className="dot" style={{ backgroundColor: `${dots[1]}` }} />
					<div className="dot" style={{ backgroundColor: `${dots[2]}` }} />
				</div>

			</main>
		)
	}
}
