import React from 'react'

const CircleGroup = (props) => {
	const { imgList, desc, className, style } = props;
	return (
		<div className={className} style={style}>
			<div className="description">{desc}</div>
			<div className="circle-wrapper">
				{ imgList.map((image, index) => (<img key={"circle--" + index} className={image.class} src={image.src} alt="" />)) }
			</div>
		</div>
	)
}

export default CircleGroup
