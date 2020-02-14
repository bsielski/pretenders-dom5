import React from 'react';
import {NationInfo} from './NationInfo';
import {ResetAllButton} from './ResetAllButton';
import { path } from 'ramda';
import './App.css';
import './Nation.css';

export class Nation extends React.Component {
    constructor(props) {
	super(props);
	this.handleResetAll = this.handleResetAll.bind(this);
	this.handleSelection = this.handleSelection.bind(this);
    }

    handleResetAll(e) {
	this.props.resetNation(e);
    }

    handleSelection(e) {
	this.props.changeOption(e);
    }
    
    render() {
	const nationOptions = Object.keys(this.props.nations).map(nationId => {
	    return (
		<option key={nationId} value={nationId} className={"nation-picker__option nation-picker__option--era_" + this.props.nations[nationId].era}>
		  {this.props.nations[nationId].era} {this.props.nations[nationId].name}: {this.props.nations[nationId].epithet}
		</option>
	    );
	});

	return (
	    <div className="form">
	      <header className="form__header">Nation</header>
	      <div className="form__body form__body--nation">
		<div className="form__body">
		  <select
		    name="nationId" value={this.props.nationId}
		    onChange={this.handleSelection}
		    className="nation-picker__select"
		    id="nation-picker__select"
		    >
		    {nationOptions}
		  </select>
		  <ResetAllButton
		    onClick={this.handleResetAll}
		    />
		</div>
		< NationInfo
		  f={path(['bless_bonus', 'f'], this.props.nations[this.props.nationId])}
		  a={path(['bless_bonus', 'a'], this.props.nations[this.props.nationId])}
		  w={path(['bless_bonus', 'w'], this.props.nations[this.props.nationId])}
		  e={path(['bless_bonus', 'e'], this.props.nations[this.props.nationId])}
		  s={path(['bless_bonus', 's'], this.props.nations[this.props.nationId])}
		  d={path(['bless_bonus', 'd'], this.props.nations[this.props.nationId])}
		  n={path(['bless_bonus', 'n'], this.props.nations[this.props.nationId])}
		  b={path(['bless_bonus', 'b'], this.props.nations[this.props.nationId])}
		  heat={path(['scales', 'heat'], this.props.nations[this.props.nationId])}
		  growth={path(['scales', 'growth'], this.props.nations[this.props.nationId])}
		  />
	      </div>
	    </div>
	);
    }
}

