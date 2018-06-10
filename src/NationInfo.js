import React from 'react';

import './NationInfo.css';

export class NationInfo extends React.Component {
    render() {
	const fBonus = this.props.f ? " Fire +"   + this.props.f : "";
	const aBonus = this.props.a ? " Air +"    + this.props.a : "";
	const wBonus = this.props.w ? " Water +"  + this.props.w : "";
	const eBonus = this.props.e ? " Earth +"  + this.props.e : "";
	const sBonus = this.props.s ? " Astral +" + this.props.s : "";
	const dBonus = this.props.d ? " Death +"  + this.props.d : "";
	const nBonus = this.props.n ? " Nature +" + this.props.n : "";
	const bBonus = this.props.b ? " Blood +"  + this.props.b : "";
	const heat = this.props.heat ? "Farourite temperature: "  + this.props.heat : "";
	const growth = this.props.growth ? "Default growth: "  + this.props.growth : "";
	return (
	    <div className="nation_info">
              <p className="nation_info__blesses">
		{(fBonus || aBonus || wBonus || eBonus || sBonus || dBonus || nBonus || bBonus) ? "Nation bless bonuses:" : ""}
		<span className="nation_info__blesses--fire">{fBonus}</span>
		<span className="nation_info__blesses--air">{aBonus}</span>
		<span className="nation_info__blesses--earth">{eBonus}</span>
		<span className="nation_info__blesses--water">{wBonus}</span>
		<span className="nation_info__blesses--astral">{sBonus}</span>
		<span className="nation_info__blesses--death">{dBonus}</span>
		<span className="nation_info__blesses--nature">{nBonus}</span>
		<span className="nation_info__blesses--blood">{bBonus}</span>
              </p>
              <p className="nation_info__heat">
		{heat}
              </p>
              <p className="nation_info__growth">
		{growth}
              </p>

	    </div>
	);
    }
}

