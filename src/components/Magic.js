import React from 'react';

import {ResetMagicButton} from './ResetMagicButton';
import './App.css';
import './Magic.css';

export class Magic extends React.Component {
    constructor(props) {
	super(props);
	this.handleResetMagic = this.handleResetMagic.bind(this);
	this.handleChange = this.handleChange.bind(this);
    }

    handleResetMagic(e) {
	this.props.resetMagic(e);
    }

    handleChange(e) {
	this.props.changePathLevel(e);
    }
    
    render() {
	
	
	return (
	    <div className="form">
	      <header className="form__header">Magic</header>
	      <div className="form__body">
		<div className="form__section">
		  <div className="value-picker value-picker--magic value-picker--fire">
		    <label className="value-picker__label value-picker__label--magic value-picker__label--fire" htmlFor="fire-picker__input">
		      F
		    </label>
		    <input type="number" name="f" onChange={this.handleChange} min="0" max="10" value={this.props.path.f}
			   id="fire-picker__input" className="value-picker__input value-picker__input--magic value-picker__input--fire"/>
		  </div>
		  <div className="value-picker value-picker--magic value-picker--air">
		    <label className="value-picker__label value-picker__label--magic value-picker__label--air" htmlFor="air-picker__input">
		      A
		    </label>
		    <input type="number" name="a" onChange={this.handleChange} min="0" max="10" value={this.props.path.a}
			   id="air-picker__input" className="value-picker__input value-picker__input--magic value-picker__input--air" />
		  </div>
		  <div className="value-picker value-picker--magic value-picker--water">
		    <label className="value-picker__label value-picker__label--magic value-picker__label--water" htmlFor="water-picker__input">
		      W
		    </label>
		    <input type="number" name="w" onChange={this.handleChange} min="0" max="10" value={this.props.path.w}
			   id="water-picker__input" className="value-picker__input value-picker__input--magic value-picker__input--water" />
		  </div>
		  <div className="value-picker value-picker--magic value-picker--earth">
		    <label className="value-picker__label value-picker__label--magic value-picker__label--earth" htmlFor="earth-picker__input">
		      E
		    </label>
		    <input type="number" name="e" onChange={this.handleChange} min="0" max="10" value={this.props.path.e}
			   id="earth-picker__input" className="value-picker__input value-picker__input--magic value-picker__input--earth" />
		  </div>
		</div>
		<div className="form__section">
		  <div className="value-picker value-picker--magic value-picker--astral">
		    <label className="value-picker__label value-picker__label--magic value-picker__label--astral" htmlFor="astral-picker__input">
		      S
		    </label>
		    <input type="number" name="s" onChange={this.handleChange} min="0" max="10" value={this.props.path.s}
			   id="astral-picker__input" className="value-picker__input value-picker__input--magic value-picker__input--astral" />
		  </div>
		  <div className="value-picker value-picker--magic value-picker--death">
		    <label className="value-picker__label value-picker__label--magic value-picker__label--death" htmlFor="death-picker__input">
		      D
		    </label>
		    <input type="number" name="d" onChange={this.handleChange} min="0" max="10" value={this.props.path.d}
			   id="death-picker__input" className="value-picker__input value-picker__input--magic value-picker__input--death" />
		  </div>
		  <div className="value-picker value-picker--magic value-picker--nature">
		    <label className="value-picker__label value-picker__label--magic value-picker__label--nature" htmlFor="nature-picker__input">
		      N
		    </label>
		    <input type="number" name="n" onChange={this.handleChange} min="0" max="10" value={this.props.path.n}
			   id="nature-picker__input" className="value-picker__input value-picker__input--magic value-picker__input--nature" />
		  </div>
		  <div className="value-picker value-picker--magic value-picker--blood">
		    <label className="value-picker__label value-picker__label--magic value-picker__label--blood" htmlFor="blood-picker__input">
		      B
		    </label>
		    <input type="number" name="b" onChange={this.handleChange} min="0" max="10" value={this.props.path.b}
			   id="blood-picker__input" className="value-picker__input value-picker__input--magic value-picker__input--blood" />
		  </div>
		</div>
		</div>
		<ResetMagicButton
		  onClick={this.handleResetMagic}
		  />
	    </div>
	);
    }
}

