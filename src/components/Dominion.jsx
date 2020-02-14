import React from 'react';
import {NationScalesInfo} from './NationScalesInfo';
import {ResetScalesButton} from './ResetScalesButton';

import './App.css';
import './Dominion.css';

export class Dominion extends React.Component {
    constructor(props) {
	super(props);
	this.handleResetScales = this.handleResetScales.bind(this);
	this.handleChange = this.handleChange.bind(this);
    }

    handleResetScales(e) {
	this.props.resetScales(e);
    }

    handleChange(e) {
	this.props.changeNumber(e);
    }
    
    render() {
	
	return (
	    <div className="form">
	      <header className="form__header">Dominion</header>
	      < NationScalesInfo
		heat={this.props.nations[this.props.nationId].heat}
		growth={this.props.nations[this.props.nationId].growth}
		/>
	      <div className="form__body">
		<div className="form__section">
		  <div className="value-picker value-picker--dominion">
		    <label className="value-picker__label value-picker__label--dominion"
			   htmlFor="dominion-picker__input">
		      Dom
		    </label>
		    <input type="number" name="dominion" onChange={this.handleChange}
			   min="1" max="10" value={this.props.dominion} id="dominion-picker__input"
			   className="value-picker__input value-picker__input--dominion" />
		  </div>
		</div>
		<div className="form__body">
		  <div className="form__section">
		    <div className="value-picker value-picker--scale">
		      <label className="value-picker__label value-picker__label--scale value-picker__label--order"
			     htmlFor="order-picker__input">
			Ord
		      </label>
		      <input type="number" name="order" onChange={this.handleChange}
			     min="-3" max="3" value={this.props.order} id="order-picker__input"
			     className="value-picker__input value-picker__input--scale value-picker__input--order" />
		    </div>
		    <div className="value-picker value-picker--scale">
		      <label className="value-picker__label value-picker__label--scale value-picker__label--productivity"
			     htmlFor="productivity-picker__input">
			Prd
		      </label>
		      <input type="number" name="productivity" onChange={this.handleChange}
			     min="-3" max="3" value={this.props.productivity} id="productivity-picker__input"
			     className="value-picker__input value-picker__input--scale value-picker__input--productivity" />
		    </div>
		    <div className="value-picker value-picker--scale">
		      <label className="value-picker__label value-picker__label--scale value-picker__label--heat"
			     htmlFor="heat-picker__input">
			Heat
		      </label>
		      <input type="number" name="heat" onChange={this.handleChange}
			     min="-3" max="3" value={this.props.heat} id="heat-picker__input"
			     className="value-picker__input value-picker__input--scale value-picker__input--heat" />
		    </div>
		  </div>
		  <div className="form__section">
		    <div className="value-picker value-picker--scale">
		      <label className="value-picker__label value-picker__label--scale value-picker__label--growth"
			     htmlFor="growth-picker__input">
			Grw
		      </label>
		      <input type="number" name="growth" onChange={this.handleChange}
			     min="-3" max="3" value={this.props.growth} id="growth-picker__input"
			     className="value-picker__input value-picker__input--scale value-picker__input--growth" />
		    </div>
		    <div className="value-picker value-picker--scale">
		      <label className="value-picker__label value-picker__label--scale value-picker__label--fortune"
			     htmlFor="fortune-picker__input">
			Frt
		      </label>
		      <input type="number" name="fortune" onChange={this.handleChange}
			     min="-3" max="3" value={this.props.fortune} id="fortune-picker__input"
			     className="value-picker__input value-picker__input--scale value-picker__input--fortune" />
		    </div>
		    <div className="value-picker value-picker--scale">
		      <label className="value-picker__label value-picker__label--scale value-picker__label--magic"
			     htmlFor="magic-picker__input">
			Mgc
		      </label>
		      <input type="number" name="magic" onChange={this.handleChange}
			     min="-3" max="3" value={this.props.magic} id="magic-picker__input"
			     className="value-picker__input value-picker__input--scale value-picker__input--magic" />
		    </div>
		  </div>
		</div>
	      </div>
	      <ResetScalesButton
	        onClick={this.handleResetScales}
		/>
	    </div>
	);
    }
}

