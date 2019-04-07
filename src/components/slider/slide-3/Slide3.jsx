import React from 'react'
import bgImg from '../../../images/section-3/background.png'
import Subslider from './Subslider'

const Slide3 = () => {
	return (
		<section
			className="slide slide-3"
			style={{ backgroundImage: `url(${bgImg})` }}
		>
			<Subslider duration={1} />
		</section>
	)
}

export default Slide3
