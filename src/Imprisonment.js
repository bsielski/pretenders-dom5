import React from 'react';

import './App.css';
import './Imprisonment.css';

export class Imprisonment extends React.Component {
    constructor(props) {
	super(props);
	this.handleSelection = this.handleSelection.bind(this);
    }

    handleSelection(e) {
	this.props.changeRadio(e);
    }
    
    render() {
	
	const isImprosonmentChecked = (value) => {
	    return this.props.imprisonment === parseInt(value, 10);
	};
	
	const imprisonmentOptions = Object.keys(this.props.imprisonmentOptions).map(imprisonmentLevel => {
	    return (
		<div key={imprisonmentLevel} className="value-picker value-picker--imprisonment value-picker--imprisonment-checked">
		  <input type="radio" id={"imprisonment_"+imprisonmentLevel.toString()+"_picker__input"}
			 onChange={this.handleSelection} checked={isImprosonmentChecked(imprisonmentLevel)}
			 name="imprisonment" value={imprisonmentLevel} className="value-picker__input value-picker__input--imprisonment"
			 />
		  <label className="value-picker__label value-picker__label--imprisonment"
			 htmlFor={"imprisonment_"+imprisonmentLevel.toString()+"_picker__input"}
			 >
		    {this.props.imprisonmentOptions[imprisonmentLevel].label}
		  </label>
		</div>
	    );
	});
	
	
	return (
	    <div className="form">
	      <header className="form__header">Imprisonment</header>
	      <div className="form__body form__body--imprisonment">
		{imprisonmentOptions}			
	      </div>
	    </div>  
	);
    }
}

