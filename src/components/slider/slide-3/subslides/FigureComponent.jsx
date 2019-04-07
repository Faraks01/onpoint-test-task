import React from 'react'

const FigureComponent = (props) => {
	const { className, imgSrc, figcaption, symbol } = props;
	return (
		<figure className={className}>
			<span className="picture-wrapper">
				{imgSrc ? <img src={imgSrc} alt=""/> : <p>{symbol}</p>}
			</span>
			<figcaption>{figcaption}</figcaption>
		</figure>
	)
}

export default FigureComponent
