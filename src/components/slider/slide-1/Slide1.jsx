import React from 'react'
import CircleGroup from './CircleGroup'
import bgImage from '../../../images/section-1/background.jpg'
import nextImage from '../../../images/section-1/next.png'
import { circleImagesList } from './circleImagesList'

const Slide1 = (props) => {
	let { duration, active } = props;
	let contentBubbling = {
		transform: active ? "translateY(0)" : "",
		transition: `${duration + 0.3}s`
	};
	return (
		<section 
			className="slide slide-1"
			style={{backgroundImage: `url(${bgImage})`}}
		>
			<h1 className="slide-title" style={contentBubbling}>
				Всегда ли цели терапии СД2 <br /> на поверхности?
			</h1>
			<CircleGroup
				className="circle-group circle-group-1"
				imgList={circleImagesList[0]}
				desc="Цель по HbA1c"
				style={contentBubbling}
			/>
			<CircleGroup
				className="circle-group circle-group-2"
				imgList={circleImagesList[1]}
				desc="Гипоглекимия"
				style={contentBubbling}
			/>
			<CircleGroup
				className="circle-group circle-group-3"
				imgList={circleImagesList[2]}
				desc="СС риски"
				style={contentBubbling}
			/>
			<CircleGroup
				className="circle-group circle-group-4"
				imgList={circleImagesList[3]}
				desc="Осложнения СД"
				style={contentBubbling}
			/>
			<footer 
				className="section-footer"
				style={{backgroundImage: `url(${nextImage})`}}
			>
				<h6>Листайте вниз</h6>
			</footer>
		</section>
	)
}

export default Slide1

