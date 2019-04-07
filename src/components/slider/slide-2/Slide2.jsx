import React from 'react'
import bgImg from '../../../images/section-2/background.jpg'
import iceShardPic1 from '../../../images/section-2/ice-shard-1.png'
import iceShardPic2 from '../../../images/section-2/ice-shard-2.png'
import iceShardPic3 from '../../../images/section-2/ice-shard-3.png'
import iceShardPic4 from '../../../images/section-2/ice-shard-4.png'

const Slide2 = (props) => {
	let { duration, active } = props;
	let contentBubbling = {
		transform: active ? "translateY(0)" : "",
		transition: `${duration + 0.3}s`
	};
	return (
		<section
			className="slide slide-2"
			style={{ backgroundImage: `url(${bgImg})` }}
		>
			<h1 className="headline" style={contentBubbling}>
				Основа терапии — <br /> патогенез СД2
			</h1>
			<span className="pictures-group">
				<img className="picture picture-1" src={iceShardPic1} alt="" style={contentBubbling} />
				<img className="picture picture-2" src={iceShardPic2} alt="" style={contentBubbling} />
				<img className="picture picture-3" src={iceShardPic3} alt="" style={contentBubbling} />
				<img className="picture picture-4" src={iceShardPic4} alt="" style={contentBubbling} />
			</span>
		</section>
	)
}

export default Slide2

