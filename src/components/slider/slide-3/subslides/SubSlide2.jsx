import React from 'react'
import schemaArrowsPic from '../../../../images/section-3/schema-arrows-2.png'
import fatCellPic from '../../../../images/section-3/fat-cell.png'
import musclePic from '../../../../images/section-3/musle.png'
import liverPic from '../../../../images/section-3/liver.png'
import brainPic from '../../../../images/section-3/brain.png'
import kidneyPic from '../../../../images/section-3/kidney.png'
import iceShardPic1 from '../../../../images/section-3/ice-shard-1.png'
import iceShardPic2 from '../../../../images/section-3/ice-shard-2.png'
import iceShardPic3 from '../../../../images/section-3/ice-shard-3.png'
import FigureComponent from './FigureComponent'

const SubSlide2 = () => {
	const FIGURE_COMPONENT_DATA = [
		{ symbol: "β", figcaption: (<p><span>1</span><br/>β-клетки</p>) },
		{ symbol: "2", figcaption: (<p>Инкретиновый<br/> эффект</p>) },
		{ symbol: "3", figcaption: (<p>Дефект<br/> α-клеток</p>) },
		{ imgSrc: fatCellPic, figcaption: (<p><span>4</span><br/>Жировые<br/>клетки</p>) },
		{ imgSrc: musclePic, figcaption: (<p><span>5</span><br/>Мышцы</p>) },
		{ imgSrc: liverPic, figcaption: (<p><span>6</span><br/>Печень</p>) },
		{ imgSrc: brainPic, figcaption: (<p><span>7</span><br/>Головной<br/> мозг</p>) },
		{ imgSrc: kidneyPic, figcaption: (<p><span>8</span><br/>Почки</p>) }
	];
	return (
		<div className="subslide subslide-2">
			<h1 className="title">Смертельный октет</h1>
			<span className="picture-group">
				<img src={iceShardPic1} alt="" className="picture picture-1"/>
				<img src={iceShardPic2} alt="" className="picture picture-2"/>
				<img src={iceShardPic3} alt="" className="picture picture-3"/>
			</span>
			<div className="schema">
				{FIGURE_COMPONENT_DATA.map((obj, index) => {
					let props = { ...obj, key: `subslide-2-fig--${index}`, className: `schema-figure schema-figure-${index + 1}` };
					return (<FigureComponent {...props} />);
				})}
				<img className="schema-arrows" src={schemaArrowsPic} alt="" />
				<h2 className="schema-figure schema-figure-9">Гипергликемия</h2>
			</div>
		</div>
	)
}

export default SubSlide2
