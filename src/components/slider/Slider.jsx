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

		this.inProgress = false;
		
		this.state = {
			index: 0,
			initialYCoord: null,
			difference: null,
			dots: {
				0: "#f78b1f",
				1: "white",
				2: "white"
			}
		};
	}

	trackTouchStart = (e) => {
		let { initialYCoord } = this.state;
		let { clientY: Y } = e.touches[0];
		if (initialYCoord === null) this.setState({ initialYCoord: Y });
	}

	trackTouchMove = (e) => {
		let { initialYCoord } = this.state;
		let { clientY: Y } = e.touches[0];
		this.setState({ difference: Y - initialYCoord });
	}

	trackTouchEnd = () => {
		let { difference, index } = this.state;
		const setProgress = () => {
			this.inProgress = true;
			setTimeout(() => { this.inProgress = false }, this.props.duration * 1000);
		}

		if (this.inProgress) return;

		if (index >= 0 && index < 2 && difference <= -50) {
			setProgress();
			const increment = index + 1;
			this.setState({
				index: increment,
				dots: {
					...this.DOTS_CLEAR_STATE,
					[increment]: "#f78b1f"
				}
			})
		};

		if (index <= 2 && index > 0 && difference >= 50) {
			setProgress();
			const decrement = index - 1;
			this.setState({
				index: decrement,
				dots: {
					...this.DOTS_CLEAR_STATE,
					[decrement]: "#f78b1f"
				}
			})
		};

		this.setState({
			initialYCoord: null,
			difference: null
		})
	}

	componentDidMount() {
		document.addEventListener("touchstart", this.trackTouchStart, false);
		document.addEventListener("touchmove", this.trackTouchMove, false);
		document.addEventListener("touchend", this.trackTouchEnd, false);
	}

	componentWillUnmount() {
		document.removeEventListener("touchstart", this.trackTouchStart, false);
		document.removeEventListener("touchmove", this.trackTouchMove, false);
		document.removeEventListener("touchend", this.trackTouchEnd, false);
	}

	render() {
		const { index, dots } = this.state;
		const { duration, cubicBezier } = this.props;
		let sliderStyle = {
			transform: `translateY(calc(-100% * ${index}))`,
			transition: `${duration}s ${cubicBezier}`
		};
		return (
			<main>
				<div className="container" style={sliderStyle}>
					<Slide1 duration={duration} active={index === 0} />
					<Slide2 duration={duration} active={index === 1}/>
					<Slide3 />
				</div>

				<div className="dots-indicator">
					<div className="dot" style={{backgroundColor: `${dots[0]}`}}/>
					<div className="dot" style={{backgroundColor: `${dots[1]}`}}/>
					<div className="dot" style={{backgroundColor: `${dots[2]}`}}/>
				</div>

			</main>
		)
	}
}
