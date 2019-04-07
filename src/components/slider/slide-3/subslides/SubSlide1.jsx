import React from 'react'
import schemaArrowsPic from '../../../../images/section-3/schema-arrows-1.png'
import musclePic from '../../../../images/section-3/musle.png'
import liverPic from '../../../../images/section-3/liver.png'
import iceShardPic1 from '../../../../images/section-3/ice-shard-1.png'
import iceShardPic2 from '../../../../images/section-3/ice-shard-2.png'
import iceShardPic3 from '../../../../images/section-3/ice-shard-3.png'
import FigureComponent from './FigureComponent'

const SubSlide1 = () => {
	const FIGURE_COMPONENT_DATA = [
		{ symbol: "β", figcaption: (<p><span>1</span><br/>β-клетки</p>) },
		{ imgSrc: musclePic, figcaption: (<p><span>2</span><br/>Мышцы</p>) },
		{ imgSrc: liverPic, figcaption: (<p><span>3</span><br/>Печень</p>) }
	];
	return (
		<div className="subslide subslide-1">
			<h1 className="title">Звенья патогенеза СД2</h1>
			<span className="picture-group">
				<img src={iceShardPic1} alt="" className="picture picture-1"/>
				<img src={iceShardPic2} alt="" className="picture picture-2"/>
				<img src={iceShardPic3} alt="" className="picture picture-3"/>
			</span>
			<div className="schema">
				{FIGURE_COMPONENT_DATA.map((obj, index) => {
					let props = { ...obj, key: `subslide-1-fig--${index}`, className: `schema-figure schema-figure-${index + 1}` };
					return (<FigureComponent {...props} />);
				})}
				<img className="schema-arrows" src={schemaArrowsPic} alt="" />
				<h2 className="schema-figure schema-figure-4">Гипергликемия</h2>
			</div>
		</div>
	)
}

export default SubSlide1
