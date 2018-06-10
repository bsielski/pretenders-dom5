import React from 'react';
import {NationInfo} from './NationInfo';

import './App.css';
import './Nation.css';

export class Nation extends React.Component {
    constructor(props) {
	super(props);
	this.handleSelection = this.handleSelection.bind(this);
    }

    handleSelection(e) {
	this.props.changeOption(e);
    }
    
    render() {
	const nationOptions = Object.keys(this.props.nations).map(nationId => {
	    return (
		<option key={nationId} value={nationId} className={"nation-picker__option nation-picker__option--era_" + this.props.nations[nationId].era}>
		  {this.props.nations[nationId].label}
		</option>
	    );
	});

	return (
	    <div className="form">
	      <header className="form__header">Nation</header>
	      <div className="form__body form__body--nation">
		<select
		  name="nationId" value={this.props.nationId}
		  onChange={this.handleSelection}
		  className="nation-picker__select"
		  id="nation-picker__select"
		  >
		  {nationOptions}
		</select>
		< NationInfo
		  f={this.props.nations[this.props.nationId].blessF}
		  a={this.props.nations[this.props.nationId].blessA}
		  w={this.props.nations[this.props.nationId].blessW}
		  e={this.props.nations[this.props.nationId].blessE}
		  s={this.props.nations[this.props.nationId].blessS}
		  d={this.props.nations[this.props.nationId].blessD}
		  n={this.props.nations[this.props.nationId].blessN}
		  b={this.props.nations[this.props.nationId].blessB}
		  heat={this.props.nations[this.props.nationId].heat}
		  growth={this.props.nations[this.props.nationId].growth}
		  />
	      </div>
	    </div>
	);
    }
}

