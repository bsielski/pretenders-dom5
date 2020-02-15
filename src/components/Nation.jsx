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
        const { nations, nationId } = this.props;
	const nationOptions = Object.keys(nations).map(nId => {
	    return (
		<option
                  key={nId}
                  value={nId}
                  className={"nation-picker__option nation-picker__option--era_" + nations[nId].era}
                  >
		  {nations[nId].era} {nations[nId].name}: {nations[nId].epithet}
		</option>
	    );
	});

	return (
	    <div className="form">
	      <header className="form__header">Nation</header>
	      <div className="form__body form__body--nation">
		<div className="form__body">
		  <select
		    name="nationId" value={nationId}
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
		  f={path(['bless_bonus', 'f'], nations[nationId])}
		  a={path(['bless_bonus', 'a'], nations[nationId])}
		  w={path(['bless_bonus', 'w'], nations[nationId])}
		  e={path(['bless_bonus', 'e'], nations[nationId])}
		  s={path(['bless_bonus', 's'], nations[nationId])}
		  d={path(['bless_bonus', 'd'], nations[nationId])}
		  n={path(['bless_bonus', 'n'], nations[nationId])}
		  b={path(['bless_bonus', 'b'], nations[nationId])}
		  heat={path(['scales', 'heat'], nations[nationId])}
		  growth={path(['scales', 'growth'], nations[nationId])}
		  />
	      </div>
	    </div>
	);
    }
}

