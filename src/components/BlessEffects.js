import React from 'react';
import {NationBlessBonusInfo} from './NationBlessBonusInfo';

import {BlessEffectsWindow} from './BlessEffectsWindow';
import {BlessEffectRows} from './BlessEffectsWindow';
import {filterBlessEffects} from '../filterBlessEffects';

import './App.css';
import './BlessEffects.css';

export class BlessEffects extends React.Component {
    render() {
	
	return (
	    <div className="form">
	      <header className="form__header">Bless Effects</header>
	      <BlessEffectsWindow
		isOpen={this.props.isBlessEffectsWindowOpen}
		onClose={this.props.closeBlessEffectsWindow}
		blessEffects={this.props.blessEffects}
		/>
	      <NationBlessBonusInfo
		f={this.props.nations[this.props.nationId].blessF}
		a={this.props.nations[this.props.nationId].blessA}
		w={this.props.nations[this.props.nationId].blessW}
		e={this.props.nations[this.props.nationId].blessE}
		s={this.props.nations[this.props.nationId].blessS}
		d={this.props.nations[this.props.nationId].blessD}
		n={this.props.nations[this.props.nationId].blessN}
		b={this.props.nations[this.props.nationId].blessB}
		/>
	      <div className="form__body form__body--bless_effects">
		<div className="form__section">
		  <div className="value-picker__label value-picker__label--bless_point value-picker__label--magic value-picker__label--fire">F{this.props.blessPoints.f}</div>
		  <div className="value-picker__label value-picker__label--bless_point value-picker__label--magic value-picker__label--air">A{this.props.blessPoints.a}</div>
		  <div className="value-picker__label value-picker__label--bless_point value-picker__label--magic value-picker__label--water">W{this.props.blessPoints.w}</div>
		  <div className="value-picker__label value-picker__label--bless_point value-picker__label--magic value-picker__label--earth">E{this.props.blessPoints.e}</div>
		  <div className="value-picker__label value-picker__label--bless_point value-picker__label--magic value-picker__label--astral">S{this.props.blessPoints.s}</div>
		  <div className="value-picker__label value-picker__label--bless_point value-picker__label--magic value-picker__label--death">D{this.props.blessPoints.d}</div>
		  <div className="value-picker__label value-picker__label--bless_point value-picker__label--magic value-picker__label--nature">N{this.props.blessPoints.n}</div>
		  <div className="value-picker__label value-picker__label--bless_point value-picker__label--magic value-picker__label--blood">B{this.props.blessPoints.b}</div>
		</div>
		
		<p>
		  Available Blesses
		  <button className="bless_effects_open_button" onClick={this.props.openBlessEffectsWindow}>
		    Show all bless list
		  </button>
		</p>
		
		<div className="form__section">
		  <table className="bless_effects__table">
		    <thead className="pretenders-table__head">
		      <tr className="pretenders-table__row">
			<th className="pretenders-table__header">Bless Points</th>
			<th className="bless_effects__table_header">Scales</th>
			<th className="bless_effects__table_header">Name</th>
			<th className="bless_effects__table_header">Short description</th>
			<th className="bless_effects__table_header">Incarnate only?</th>
		      </tr>
		    </thead>
		    <BlessEffectRows effects={filterBlessEffects(this.props.blessEffects, this.props.blessPoints)} />
		  </table>
		</div>
		
	      </div>
	    </div>

	);
    }
}

