import React from 'react'
import schemaArrowsPic from '../../../../images/section-3/schema-arrows-3.png'
import fatCellPic from '../../../../images/section-3/fat-cell.png'
import musclePic from '../../../../images/section-3/musle.png'
import liverPic from '../../../../images/section-3/liver.png'
import brainPic from '../../../../images/section-3/brain.png'
import intestinesPic from '../../../../images/section-3/intestines.png'
import infectionPic from '../../../../images/section-3/infection.png'
import stomachPic from '../../../../images/section-3/stomach.png'
import kidneyPic from '../../../../images/section-3/kidney.png'
import liningPic from '../../../../images/section-3/lining.png'
import iceShardPic1 from '../../../../images/section-3/ice-shard-1.png'
import iceShardPic2 from '../../../../images/section-3/ice-shard-2.png'
import iceShardPic3 from '../../../../images/section-3/ice-shard-3.png'
import FigureComponent from './FigureComponent'

const SubSlide3 = () => {
	const FIGURE_COMPONENT_DATA = [
		{ symbol: "β", figcaption: (<p><span>1</span>β-клетки</p>) },
		{ symbol: "2", figcaption: (<p>↓ инкретинового<br /> эффекта</p>) },
		{ symbol: "3", figcaption: (<p>Дефект α-клеток</p>) },
		{ imgSrc: fatCellPic, figcaption: (<p><span>4</span><br />Жировые клетки</p>) },
		{ imgSrc: musclePic, figcaption: (<p><span>5</span><br />Мышцы</p>) },
		{ imgSrc: liverPic, figcaption: (<p><span>6</span><br />Печень</p>) },
		{ imgSrc: brainPic, figcaption: (<p><span>7</span><br />Головной мозг</p>) },
		{ imgSrc: intestinesPic, figcaption: (<p><span>8</span><br />Микрофлора<br />кишечника</p>) },
		{ imgSrc: infectionPic, figcaption: (<p><span>9</span><br />Нарушение иммунной<br />регуляции/воспаление</p>) },
		{ imgSrc: stomachPic, figcaption: (<p><span>10</span><br />Желудок</p>) },
		{ imgSrc: kidneyPic, figcaption: (<p><span>11</span><br />Почки</p>) }
	];
	return (
		<div className="subslide subslide-3">
			<h1 className="title">Звенья патогенеза СД2</h1>
			<span className="picture-group">
				<img src={iceShardPic1} alt="" className="picture picture-1" />
				<img src={iceShardPic2} alt="" className="picture picture-2" />
				<img src={iceShardPic3} alt="" className="picture picture-3" />
			</span>
			<div className="schema">
				<img className="schema-arrows" src={schemaArrowsPic} alt="" />
				{FIGURE_COMPONENT_DATA.map((obj, index) => {
					let props = { ...obj, key: `subslide-3-fig--${index}`, className: `schema-figure schema-figure-${index + 1}` };
					return (<FigureComponent {...props} />);
				})}
				<span className="schema-figure schema-figure-12">
					<h5 className="lining-headline">Инсулинорезистентность</h5>
					<img className="lining" src={liningPic} alt="" />
				</span>
				<h4 className="schema-figure schema-figure-13">↓ амилин</h4>
				<h4 className="schema-figure schema-figure-14">↑ глюкагон</h4>
				<h2 className="schema-figure schema-figure-15">Гипергликемия</h2>
			</div>
		</div>
	)
}

export default SubSlide3
