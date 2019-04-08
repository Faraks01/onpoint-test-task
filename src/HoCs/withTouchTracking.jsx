import React from 'react'

export default function withTouchTracking(WrappedComponent, axis) {
	return class extends React.Component {
		constructor(props) {
			super(props);

			this.inProgress = false;

			this.state = {
				index: 0,
				initialCoord: 0,
				difference: 0
			};
		}

		trackTouchStart = (e) => {
			let { initialCoord } = this.state;
			let { clientX: X, clientY: Y } = e.touches[0];
			if (initialCoord === 0) this.setState({ initialCoord: { X, Y } });
		}

		trackTouchMove = (e) => {
			let { X, Y } = this.state.initialCoord;
			let { clientX, clientY } = e.touches[0];
			this.setState({ difference: { X: clientX - X, Y: clientY - Y } });
		}

		trackTouchEnd = () => {
			let { difference, index } = this.state;
			const setProgress = () => {
				this.inProgress = true;
				setTimeout(() => { this.inProgress = false }, this.props.duration * 1000);
			}

			if (this.inProgress) return;

			if (index >= 0 && index < 2 && difference[axis] <= -50) {
				setProgress();
				const increment = index + 1;
				this.setState({
					index: increment
				})
			};

			if (index <= 2 && index > 0 && difference[axis] >= 50) {
				setProgress();
				const decrement = index - 1;
				this.setState({
					index: decrement
				})
			};

			this.setState({
				initialCoord: 0,
				difference: 0
			})
		}

		render() {
			return (
				<WrappedComponent
					trackTouchStart={this.trackTouchStart}
					trackTouchMove={this.trackTouchMove}
					trackTouchEnd={this.trackTouchEnd}
					index={this.state.index}
					{...this.props}
				/>
			)
		}
	}
}