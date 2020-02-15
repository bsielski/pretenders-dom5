import React from 'react';

import './NationBlessBonusInfo.css';

export class NationBlessBonusInfo extends React.Component {
    render() {
	const fBonus = this.props.f ? " Fire +"   + this.props.f : "";
	const aBonus = this.props.a ? " Air +"    + this.props.a : "";
	const wBonus = this.props.w ? " Water +"  + this.props.w : "";
	const eBonus = this.props.e ? " Earth +"  + this.props.e : "";
	const sBonus = this.props.s ? " Astral +" + this.props.s : "";
	const dBonus = this.props.d ? " Death +"  + this.props.d : "";
	const nBonus = this.props.n ? " Nature +" + this.props.n : "";
	const bBonus = this.props.b ? " Blood +"  + this.props.b : "";
	return (
	    <div className="nation_bless_bonus_info">
              <p>
		{(fBonus || aBonus || wBonus || eBonus || sBonus || dBonus || nBonus || bBonus) ? "Nation bless bonuses:" : ""}
		<span className="nation_bless_bonus_info--fire">{fBonus}</span>
		<span className="nation_bless_bonus_info--air">{aBonus}</span>
		<span className="nation_bless_bonus_info--earth">{eBonus}</span>
		<span className="nation_bless_bonus_info--water">{wBonus}</span>
		<span className="nation_bless_bonus_info--astral">{sBonus}</span>
		<span className="nation_bless_bonus_info--death">{dBonus}</span>
		<span className="nation_bless_bonus_info--nature">{nBonus}</span>
		<span className="nation_bless_bonus_info--blood">{bBonus}</span>
              </p>
	    </div>
	);
    }
}

